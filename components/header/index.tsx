import { useRouter } from "next/router";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";
import { SearchDesktop, SearchMobile } from "components/search";
import { ButtonFuchsia } from "ui/button";
import { CloseSesion } from "components/close-sesion";
import { useUser, useWindowSize } from "lib/hooks";

export function Header() {
  const router = useRouter();
  const user = useUser();
  const userEmail = user.email;
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
  const user = useUser();
  const userEmail = user.email;
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

export function HeaderWithOutSearch() {
  const router = useRouter();
  const user = useUser();
  const userEmail = user.email;
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
