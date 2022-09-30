import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ProductProps } from "lib/types";
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
  const router = useRouter();
  const { q } = router.query as any;
  const [pagination, setPagination] = useState({ limit: 3, offset: 0 });
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [hints, setHints] = useState(0);

  const handlePagination = () => {
    setPagination((prevState) => {
      return {
        limit: prevState.limit + 3,
        offset: prevState.offset + 3,
      };
    });
  };

  const getProducts = async (query: string) => {
    try {
      const result = await getProductsByQuery(
        query,
        pagination.limit,
        pagination.offset
      );
      // setProducts(result.formattedResults);
      // setHints(result.pagination.total);
    } catch (error) {
      swal("Lo sentimos, hubo un error al querer buscar el producto");
      console.log(error);
    }
  };

  useEffect(() => {
    if (q) {
      console.log({ q });

      getProducts(q);
    }
  }, [q, pagination]);

  console.log({ products });

  return (
    <MainLayout>
      <section>
        <Body style={{ color: "white" }}>
          {pagination.limit} resultados de {hints}
        </Body>
        {/* {products &&
          products.map((p) => {
            console.log(p);

            <Card
              key={1}
              img={""}
              price={"lalala"}
              title={"lalalal"}
              productId={"lalala"}
            />;
          })} */}
        <LargeLink onClick={handlePagination}>ver más &gt;</LargeLink>
      </section>
    </MainLayout>
  );
}
