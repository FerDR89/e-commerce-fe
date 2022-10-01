import { useRouter } from "next/router";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";
import { SearchDesktop, SearchMobile } from "components/search";
import { ButtonFuchsia } from "ui/button";
import { CloseSesion } from "components/close-sesion";
import { useUserEmail, useUserToken, useWindowSize } from "lib/hooks";

export function Header() {
  const router = useRouter();
  const { width } = useWindowSize();
  const token = useUserToken();
  const email = useUserEmail();

  const returnClickIcon = () => {
    router.push("/");
  };

  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
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
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <SearchDesktop />
        {token.token ? (
          <CloseSesion email={email.email} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("/signin")}>
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
  const token = useUserToken();
  const email = useUserEmail();

  const returnClickIcon = () => {
    router.push("/");
  };
  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <NavMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <SearchDesktop />
        {token.token ? (
          <CloseSesion email={email.email} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("/signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}

export function HeaderWithOutSearch() {
  const router = useRouter();
  const { width } = useWindowSize();
  const email = useUserEmail();
  const token = useUserToken();

  const returnClickIcon = () => {
    router.push("/");
  };
  return width < 376 ? (
    <>
      <div className={styles.container__nav}>
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        <NavMobile />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container__nav}>
        <div style={{ cursor: "pointer" }} onClick={returnClickIcon}>
          <LogoIcon />
        </div>
        {token.token ? (
          <CloseSesion email={email.email} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("/signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}
