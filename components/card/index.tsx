import { useRouter } from "next/router";
import { ProductProps } from "lib/types";
import { useUserToken } from "lib/hooks";
import { LargeT, Subtitle } from "ui/texts";
import styles from "./card.module.css";
import swal from "sweetalert";

export function Card({ img, title, price, productId }: ProductProps) {
  const router = useRouter();
  const token = useUserToken();

  const handleClick = () => {
    if (token.token) {
      router.push(`/item/${productId}`);
    } else {
      swal(
        "Por favor es necesario que tengas una cuenta de usario para poder ver el detalle del producto"
      );
      router.push(`/signin`);
    }
  };

  return (
    <section onClick={handleClick} className={styles.container}>
      <img src={img} alt={"Imagen de un: " + title} className={styles.img} />
      <LargeT className={styles.title}>{title}</LargeT>
      <Subtitle className={styles.price}>{price}</Subtitle>
    </section>
  );
}
