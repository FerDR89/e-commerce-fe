import style from "./featuredProducts.module.css";
import { Card } from "components/card";
import useSWR from "swr";
import fetchAPI from "lib/API";

interface ProductsArr {
  img: { url: string }[];
  productId: string;
  productCost: string;
  productName: string;
}

export function FeaturedProducts() {
  const { data, error } = useSWR(["/products", { method: "GET" }], fetchAPI);
  const featuredProductsArr = data ? data.slice(0, 3) : [];
  return (
    <section className={style.container}>
      {featuredProductsArr
        ? featuredProductsArr.map((p: ProductsArr) => {
            return (
              <Card
                key={p.productId}
                img={p.img[0].url}
                price={"$ " + p.productCost}
                title={p.productName}
                productId={p.productId}
              />
            );
          })
        : null}
    </section>
  );
}
