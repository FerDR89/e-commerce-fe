import { FeaturedProducts } from "components/featured-products";
import { SearchHome } from "components/search";
import { Title } from "ui/texts";
import style from "./homePage.module.css";

export function HomePage() {
  return (
    <>
      <section className={style.welcome__container}>
        <div className={style.title__container}>
          <Title>El mejor</Title>
          <Title>e-commerce</Title>
        </div>
        <SearchHome />
      </section>
      <section className={style.featured_products__container}>
        <FeaturedProducts />
      </section>
    </>
  );
}
