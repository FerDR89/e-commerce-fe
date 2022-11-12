import { Subtitle, LargeTB } from "ui/texts";
import style from "./thanksPage.module.css";

export function ThanksPage() {
  return (
    <section className={style.container}>
      <Subtitle>Gracias por usar Compralo!</Subtitle>
      <LargeTB>Tú compra ya está en camino </LargeTB>
    </section>
  );
}
