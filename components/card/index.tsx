import { useRouter } from "next/router";
import { LargeT, Subtitle } from "ui/texts";
import styles from "./card.module.css";

type CardProps = {
  img?: string;
  title?: string;
  price?: string;
  productId?: string;
};

export function Card({ img, title, price, productId }: CardProps) {
  const router = useRouter();
  const handleClick = () => {
    //Llamo a la API y le pido la data de este productId y lo guardo en un estado
    //O lo paso como query en la ruta de la siguiente page
    //https://nextjs.org/docs/api-reference/next/link#with-url-object
    //https://nextjs.org/docs/api-reference/next/router#router-object
  };
  return (
    <section onClick={handleClick} className={styles.container}>
      <img src={img} alt={"Imagen de un: " + title} className={styles.img} />
      <LargeT className={styles.title}>{title}</LargeT>
      <Subtitle className={styles.price}>{price}</Subtitle>
    </section>
  );
}
