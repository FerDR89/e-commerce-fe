import { Login } from "components/login";
import style from "./signingPage.module.css";

export function SignInPage() {
  return (
    <section className={style.container}>
      <Login />
    </section>
  );
}
