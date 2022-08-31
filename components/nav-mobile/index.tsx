import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import styles from "./navMobile.module.css";
import { MenuIcon } from "ui/icons";
import { Subtitle, LargeT, Body } from "ui/texts";

const SubtitleWht = styled(Subtitle)`
  color: var(--Wht);
`;

const LargeTFuchsia = styled(LargeT)`
  color: var(--fuchsia);
  font-size: 20px;
`;

const BodyWht = styled(Body)`
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

  //Buscar del state el mail del usuario. Reemplazar por la llamada al estado
  const userEmail = "ferdr89dev@gmail.com";

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
            <li className={styles.li}>
              <Link href={"/signin"}>
                <a className={styles.link}>
                  <SubtitleWht>Ingresar</SubtitleWht>
                </a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={"/profile"}>
                <a className={styles.link}>
                  <SubtitleWht>Mi Perfil</SubtitleWht>
                </a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={"/search"}>
                <a className={styles.link}>
                  <SubtitleWht>Buscar</SubtitleWht>
                </a>
              </Link>
            </li>
          </ul>
          {userEmail && showNav && (
            <div className={styles.container__close}>
              <BodyWht>{userEmail}</BodyWht>
              <LargeTFuchsia onClick={() => console.log("Click!")}>
                Cerrar sesión
              </LargeTFuchsia>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

//Agregar acá la función que borre el estado y/o localStorage
