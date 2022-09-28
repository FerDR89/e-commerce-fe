import { useRouter } from "next/router";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";
import { SearchDesktop, SearchMobile } from "components/search";
import { ButtonFuchsia } from "ui/button";
import { CloseSesion } from "components/close-sesion";
import { useWindowSize } from "lib/hooks";
import { useEffect, useState } from "react";

export function Header() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

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
        {userEmail ? (
          <CloseSesion email={userEmail} />
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
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

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
        {userEmail ? (
          <CloseSesion email={userEmail} />
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
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

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
        {userEmail ? (
          <CloseSesion email={userEmail} />
        ) : (
          <ButtonFuchsia onClick={() => router.push("/signin")}>
            Ingresar
          </ButtonFuchsia>
        )}
      </div>
    </>
  );
}
