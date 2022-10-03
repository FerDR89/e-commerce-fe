import { usePurchasedProduct } from "lib/hooks";

import { Subtitle, LargeTB } from "ui/texts";
import style from "./thanksPage.module.css";

export function ThanksPage() {
  const { product } = usePurchasedProduct();
  return (
    <section className={style.container}>
      <Subtitle>Gracias por usar Compralo !</Subtitle>
      <LargeTB>Tú {product} ya está en camino </LargeTB>
    </section>
  );
}
