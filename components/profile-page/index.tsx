import { LayOutWithOutSearchMobile } from "components/layout";
import { Profile } from "components/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./profilePage.module.css";

export function ProfilePage() {
  const router = useRouter();
  const token = localStorage.getItem("auth_token");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (token) {
      setShowProfile(true);
    } else {
      router.push("/");
    }
  }, []);

  return showProfile ? (
    <section className={style.container}>
      <Profile />
    </section>
  ) : null;
}
