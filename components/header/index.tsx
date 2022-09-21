import { useRouter } from "next/router";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";
import { SearchDesktop, SearchMobile } from "components/search";
import { ButtonFuchsia } from "ui/button";
import { CloseSesion } from "components/close-sesion";
import { useWindowSize } from "lib/hooks";

export function Header() {
  const router = useRouter();
  // const userEmail = localStorage.getItem("user_email");
  // const token = localStorage.getItem("auth_token");
  const userEmail = "lalala";
  const token = true;
  const { width } = useWindowSize();
  const returnClickIcon = () => {
    router.push("/");
  };

  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <NavMobile />
      </div>
      <div style={{ backgroundColor: "var(--Blk)" }}>
        <SearchMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <SearchDesktop />
        {userEmail && token ? (
          <CloseSesion email={userEmail} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}

export function HeaderWithOutSearchMobile() {
  const router = useRouter();
  // const userEmail = localStorage.getItem("user_email");
  // const token = localStorage.getItem("auth_token");
  const userEmail = "lalala";
  const token = true;
  const { width } = useWindowSize();
  const returnClickIcon = () => {
    router.push("/");
  };
  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <NavMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <SearchDesktop />
        {userEmail && token ? (
          <CloseSesion email={userEmail} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}

export function HeaderWithOutSearch() {
  const router = useRouter();
  // const userEmail = localStorage.getItem("user_email");
  // const token = localStorage.getItem("auth_token");
  const userEmail = "lalala";
  const token = true;
  const { width } = useWindowSize();
  const returnClickIcon = () => {
    router.push("/");
  };
  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <NavMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <div onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        {userEmail && token ? (
          <CloseSesion email={userEmail} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}
