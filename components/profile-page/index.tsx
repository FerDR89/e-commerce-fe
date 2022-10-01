import { Profile } from "components/profile";
import { useUserToken } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import style from "./profilePage.module.css";

export function ProfilePage() {
  const router = useRouter();
  const token = useUserToken();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (token.token) {
      setShowProfile(true);
    } else {
      swal(
        "Por favor es necesario que tengas una cuenta de usario para poder actualizar tú perfil"
      );
      router.replace("/signin");
    }
  }, []);

  return showProfile ? (
    <section className={style.container}>
      <Profile />
    </section>
  ) : null;
}
