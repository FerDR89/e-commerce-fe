import { useRouter } from "next/router";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";
import { SearchDesktop, SearchMobile } from "components/search";
import { ButtonFuchsia } from "ui/button";
import { CloseSesion } from "components/close-sesion";
import { useWindowSize } from "lib/hooks";

//TODO HEADER WITH MOBILE || DESKTOP

const userEmail = "";

export function Header() {
  const router = useRouter();
  const { width } = useWindowSize();
  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <LogoIcon />
        <NavMobile />
      </div>
      <div style={{ backgroundColor: "var(--Blk)" }}>
        <SearchMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <LogoIcon />
        <SearchDesktop />
        {userEmail ? (
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
  const { width } = useWindowSize();

  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <LogoIcon />
        <NavMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <LogoIcon />
        <SearchDesktop />
        {userEmail ? (
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
