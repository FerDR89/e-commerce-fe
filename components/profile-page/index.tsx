import { LayOutWithOutSearchMobile } from "components/layout";
import { Profile } from "components/profile";
import style from "./profilePage.module.css";

export function ProfilePage() {
  return (
    <LayOutWithOutSearchMobile>
      <section className={style.container}>
        <Profile />
      </section>
    </LayOutWithOutSearchMobile>
  );
}
