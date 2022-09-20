import style from "./featuredProducts.module.css";
import { Card } from "components/card";
import useSWR from "swr";
import fetchAPI from "lib/API";
import { Subtitle } from "ui/texts";
import styled from "styled-components";
import { useWindowSize } from "lib/hooks";

interface ProductsArr {
  img: { url: string }[];
  productId: string;
  productCost: string;
  productName: string;
}

const SubtitleWht = styled(Subtitle)`
  color: var(--Wht);
`;

export function FeaturedProducts() {
  const { data, error } = useSWR(["/products", { method: "GET" }], fetchAPI);
  const { width } = useWindowSize();
  const featuredProductsArr = data ? data.slice(0, 3) : [];
  return (
    <section className={style.container}>
      <div className={style.text__container}>
        {width < 376 ? (
          <SubtitleWht>Productos destacados</SubtitleWht>
        ) : (
          <Subtitle>Productos destacados</Subtitle>
        )}
      </div>
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
