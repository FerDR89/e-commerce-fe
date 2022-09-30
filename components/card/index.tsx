import { useRouter } from "next/router";
import { ProductProps } from "lib/types";
import { LargeT, Subtitle } from "ui/texts";
import styles from "./card.module.css";

export function Card({ img, title, price, productId }: ProductProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/item/${productId}`);
  };
  return (
    <section onClick={handleClick} className={styles.container}>
      <img src={img} alt={"Imagen de un: " + title} className={styles.img} />
      <LargeT className={styles.title}>{title}</LargeT>
      <Subtitle className={styles.price}>{price}</Subtitle>
    </section>
  );
}
