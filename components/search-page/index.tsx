import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ProductArrProps } from "lib/types";
import { getProductsByQuery } from "lib/API";
import { MainLayout } from "components/layout";
import { Card } from "components/card";
import { Body, LargeT } from "ui/texts";
import swal from "sweetalert";

const LargeLink = styled(LargeT)`
  font-size: 24px;
  color: var(--blue);
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

export function SearchPage() {
  // const router = useRouter();
  // const { q } = router.query as any;
  // const [offset, setOffset] = useState(0);
  // const [products, setProducts] = useState<ProductArrProps[]>([]);
  // const [hints, setHints] = useState(0);

  // const handlePagination = () => {
  //   if (products.length < hints) {
  //     setOffset((prevState) => prevState + 3);
  //   } else {
  //     swal("No encontramos más productos en nuestro catalógo");
  //   }
  // };

  // const getProducts = async (query: string) => {
  //   try {
  //     const result = await getProductsByQuery(query, offset);
  //     const arrProducts = result.formattedResults;
  //     if (products.length > 0) {
  //       console.log("if");
  //       setProducts((prevState) => {
  //         return prevState.concat(arrProducts);
  //       });
  //     } else {
  //       console.log("else");
  //       setProducts(arrProducts);
  //       setHints(result.pagination.total);
  //     }
  //   } catch (error) {
  //     swal("Lo sentimos, hubo un error al querer buscar el producto");
  //     console.log(error);
  //   }
  // };

  // // useEffect(() => {
  // //   if (q) {
  // //     getProducts(q);
  // //   }
  // // }, [q, offset]);

  // useEffect(() => {
  //   if (q) {
  //     setProducts([]);
  //     setHints(0);
  //     getProducts(q);
  //   }
  // }, [q]);

  // useEffect(() => {
  //   getProducts(q);
  // }, [offset]);

  return (
    <MainLayout>
      {/* <>
        <Body style={{ color: "white" }}>
          {products.length} resultados de {hints}
        </Body>
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
        <LargeLink onClick={handlePagination}>ver más &gt;</LargeLink>
      </> */}
    </MainLayout>
  );
}
