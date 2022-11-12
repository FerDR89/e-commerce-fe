import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import swal from "sweetalert";
import fetchAPI, { createOrder } from "lib/API";
import { useUserToken, useWindowSize } from "lib/hooks";
import { Title, Subtitle, Body } from "ui/texts";
import { ButtonLightBlue } from "ui/button";
import style from "./productPage.module.css";

interface ProductPageProp {
  productId: string;
}

const ButtonLightBlueXL = styled(ButtonLightBlue)`
  width: 421px;
`;

const ProductPage = ({ productId }: ProductPageProp) => {
  const router = useRouter();
  const token = useUserToken();

  const { width } = useWindowSize();

  const { data, error } = useSWR(
    [`/products/${productId}`, { method: "GET" }],
    fetchAPI
  );

  const handleClick = async () => {
    if (!token.token) {
      swal("Para realizar una compra, necesitamos que por favor te registres");
      router.replace("/signin");
    } else {
      try {
        const url = await createOrder(productId);

        router.replace(`${url}`);
      } catch (error) {
        swal("error");
      }
    }
  };

  return (
    data && (
      <section className={style.container}>
        <div className={style.img__container}>
          <img
            src={data.Images[0].thumbnails.large.url}
            alt={data.Name}
            className={style.img}
          />
        </div>

        <div className={style.info__container}>
          <div className={style.text__container}>
            <Subtitle>{data.Name}</Subtitle>
          </div>
          <div className={style.text__container}>
            <Title>$ {data.UnitCost}</Title>
          </div>
          {width < 376 ? (
            <ButtonLightBlue onClick={handleClick}>Comprar</ButtonLightBlue>
          ) : (
            <ButtonLightBlueXL onClick={handleClick}>Comprar</ButtonLightBlueXL>
          )}
          <div className={style.text__container}>
            <Body>{data.Description}</Body>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductPage;
