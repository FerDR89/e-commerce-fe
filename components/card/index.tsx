import { useRouter } from "next/router";
import { LargeT, Subtitle } from "ui/texts";
import styles from "./card.module.css";

type CardProps = {
  img: string;
  title: string;
  price: string;
  productId: string;
};

export function Card({ img, title, price, productId }: CardProps) {
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
