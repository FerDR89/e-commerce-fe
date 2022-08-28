import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { MenuIcon } from "ui/icons";
import { Subtitle, LargeT, Body } from "ui/texts";

const SubtitleWht = styled(Body)`
  color: var(--Wht);
`;

const LargeTFuchsia = styled(LargeT)`
  color: var(--Wht);
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

export function Nav() {
  return (
    <>
      <div>
        <MenuIconLB />
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/signin"}>
              <a>
                <a /*className={styles.link}*/>
                  <SubtitleWht>Ingresar</SubtitleWht>
                </a>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a>
                <a /*className={styles.link}*/>
                  <SubtitleWht>Mi perfil</SubtitleWht>
                </a>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/search"}>
              <a>
                <a /*className={styles.link}*/>
                  <SubtitleWht>Buscar</SubtitleWht>
                </a>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <BodyWht></BodyWht>
        <LargeTFuchsia>Cerrar sesión</LargeTFuchsia>
      </div>
    </>
  );
}
