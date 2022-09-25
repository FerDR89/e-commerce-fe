import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import fetchAPI, { createOrder } from "lib/API";
import { Title, Subtitle, Body } from "ui/texts";
import { ButtonLightBlue } from "ui/button";
import style from "./productPage.module.css";
import { useWindowSize } from "lib/hooks";
import swal from "sweetalert";

interface ProductPageProp {
  productId: string;
}

const ButtonLightBlueXL = styled(ButtonLightBlue)`
  width: 421px;
`;

const ProductPage = ({ productId }: ProductPageProp) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data, error } = useSWR(
    [`/products/${productId}`, { method: "GET" }],
    fetchAPI
  );
  const token = localStorage.getItem("auth_token");

  const handleClick = async () => {
    if (!token) {
      router.push("/signin");
    }
    const url = await createOrder(productId);
    if (!url) {
      swal("erro");
    }
    window.open(url, "_blank");
    // console.log(url);
    // router.replace(`${url}`);
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
