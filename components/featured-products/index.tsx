import useSWR from "swr";
import styled from "styled-components";
import fetchAPI from "lib/API";
import { useWindowSize } from "lib/hooks";
import { FeaturedProducts } from "lib/types";
import { Card } from "components/card";
import { Subtitle } from "ui/texts";
import style from "./featuredProducts.module.css";

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
        ? featuredProductsArr.map((p: FeaturedProducts) => {
            return (
              <Card
                key={p.productId}
                img={p.img[0].thumbnails.large.url}
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
