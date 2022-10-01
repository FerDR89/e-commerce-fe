import Link from "next/link";
import styled from "styled-components";
import styles from "./footer.module.css";
import { Body } from "ui/texts";
import { InstagramIcon, TwitterIcon } from "ui/icons";
import { useSetUserEmail, useSetUserToken } from "lib/hooks";

const BodyWht = styled(Body)`
  color: var(--Wht);
  width: 100px;
`;
const BodyWht20 = styled(BodyWht)`
  font-size: 20px;
`;

export function Footer() {
  const [userEmail, setUserEmail] = useSetUserEmail();
  const [userToken, setUserToken] = useSetUserToken();
  return (
    <section className={styles.container}>
      <div className={styles.nav__container}>
        <ul className={styles.nav}>
          <li className={styles.li}>
            <Link href={"/signin"}>
              <a className={styles.link}>
                <BodyWht>Ingresar</BodyWht>
              </a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href={"/profile"}>
              <a className={styles.link}>
                <BodyWht>Mi perfil</BodyWht>
              </a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href={"/search"}>
              <a className={styles.link}>
                <BodyWht>Buscar</BodyWht>
              </a>
            </Link>
          </li>
          <li
            className={styles.li}
            onClick={() => {
              localStorage.clear();
            }}
          >
            <Link href={"/logout"}>
              <a className={styles.link}>
                <BodyWht
                  onClick={() => {
                    localStorage.clear();
                    setUserEmail({ email: "" });
                    setUserToken({ token: "" });
                  }}
                >
                  Logout
                </BodyWht>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["social-media"]}>
        <BodyWht20>Redes</BodyWht20>
        <div className={styles.twitter__container}>
          <TwitterIcon />
          <BodyWht>Twitter</BodyWht>
        </div>
        <div className={styles.instagram__container}>
          <InstagramIcon />
          <BodyWht>Instagram</BodyWht>
        </div>
      </div>
      <div className={styles.copyright}>
        <BodyWht>©2022 FDR89</BodyWht>
      </div>
    </section>
  );
}
