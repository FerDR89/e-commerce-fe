import { LayOutWithOutSearchMobile } from "components/layout";
import { Profile } from "components/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./profilePage.module.css";

export function ProfilePage() {
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setShowProfile(true);
    } else {
      router.push("/");
    }
  }, []);

  return showProfile ? (
    <LayOutWithOutSearchMobile>
      <section className={style.container}>
        <Profile />
      </section>
    </LayOutWithOutSearchMobile>
  ) : null;
}
