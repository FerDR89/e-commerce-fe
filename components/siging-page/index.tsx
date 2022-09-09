import { LayOutWithOutSearchMobile } from "components/layout";
import { Login } from "components/login";
import style from "./signingPage.module.css";

export function SignInPage() {
  return (
    <LayOutWithOutSearchMobile>
      <section className={style.container}>
        <Login />
      </section>
    </LayOutWithOutSearchMobile>
  );
}
