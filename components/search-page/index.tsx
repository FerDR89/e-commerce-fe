import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import swal from "sweetalert";
import { ProductArrProps } from "lib/types";
import { getProductsByQuery } from "lib/API";
import { MainLayout } from "components/layout";
import { Card } from "components/card";
import { Body, LargeT, Subtitle } from "ui/texts";
import styles from "./searchPage.module.css";

const LargeLink = styled(LargeT)`
  font-size: 24px;
  color: var(--ligth-blue);
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

export function SearchPage() {
  const router = useRouter();
  const { q } = router.query as any;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState<ProductArrProps[]>([]);
  const [hints, setHints] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const getProducts = async (query: string) => {
    try {
      const result = await getProductsByQuery(query, offset);
      const arrProducts = result.formattedResults;
      if (products.length > 0) {
        setProducts((prevState) => {
          return prevState.concat(arrProducts);
        });
        setHints(result.pagination.total);
      } else {
        setProducts(arrProducts);
        setHints(result.pagination.total);
        setLoading(false);
      }
    } catch (error) {
      swal("Lo sentimos, hubo un error al querer buscar el producto");
      console.log(error);
    }
  };

  const handlePagination = () => {
    if (products.length < hints) {
      setOffset((prevState) => prevState + 3);
    } else {
      swal("No encontramos más productos en nuestro catalógo");
    }
  };

  useEffect(() => {
    if (q) {
      setProducts([]);
      setOffset(0);
      setHints(0);
      getProducts(q);
    }
  }, [q]);

  useEffect(() => {
    if (q) {
      getProducts(q);
    }
  }, [offset]);

  console.log({ hints, isLoading });

  return (
    <MainLayout>
      <section
        className={
          isLoading ? `${styles.container__loading}` : `${styles.container}`
        }
      >
        <div className={styles.text__container}>
          {!q && hints == 0 && isLoading && (
            <Subtitle className={styles.subtitle}>
              ¿En qué podemos ayudarte?
            </Subtitle>
          )}
        </div>
        <div className={styles.results__container}>
          {hints > 0 && !isLoading && (
            <Body className={styles.text}>
              {products.length} resultados de {hints}
            </Body>
          )}
        </div>
        <div className={styles.cards__container}>
          {products &&
            products.map((p) => {
              return (
                <Card
                  key={p.productId}
                  img={p.img[0].thumbnails.large.url}
                  price={"$ " + p.price}
                  title={p.title}
                  productId={p.productId}
                />
              );
            })}
        </div>
        <div>
          {hints > 0 && (
            <LargeLink onClick={handlePagination}>ver más &gt;</LargeLink>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
