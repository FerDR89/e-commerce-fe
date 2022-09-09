import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import styles from "./navMobile.module.css";
import { MenuIcon } from "ui/icons";
import { Subtitle } from "ui/texts";
import { CloseSesion } from "components/close-sesion";
import { useUser } from "lib/hooks";

const SubtitleWht = styled(Subtitle)`
  color: var(--Wht);
`;
const MenuIconLB = styled(MenuIcon)`
  width: 30px;
  height: 30px;
  fill: var(--ligth-blue);
  cursor: pointer;
`;

export function NavMobile() {
  const [showNav, setShowNav] = useState(false);
  const user = useUser();
  const userEmail = user.email;

  const handleClick = () => {
    showNav === false ? setShowNav(true) : setShowNav(false);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.container__icon}>
        <MenuIconLB className={styles.icon} />
      </div>
      {showNav && (
        <nav className={styles.container__nav}>
          <ul className={styles.container__ul}>
            <li className={styles.li} onClick={handleClick}>
              <Link href={"/signin"}>
                <a className={styles.link}>
                  <SubtitleWht>Ingresar</SubtitleWht>
                </a>
              </Link>
            </li>
            <li className={styles.li} onClick={handleClick}>
              <Link href={"/profile"}>
                <a className={styles.link}>
                  <SubtitleWht>Mi Perfil</SubtitleWht>
                </a>
              </Link>
            </li>
            <li className={styles.li} onClick={handleClick}>
              <Link href={"/search"}>
                <a className={styles.link}>
                  <SubtitleWht>Buscar</SubtitleWht>
                </a>
              </Link>
            </li>
          </ul>
          {userEmail && showNav && <CloseSesion email={userEmail} />}
        </nav>
      )}
    </>
  );
}
