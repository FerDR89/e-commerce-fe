import Link from "next/link";
import styled from "styled-components";
import styles from "./header.module.css";
import { NavMobile } from "components/nav-mobile";
import { LogoIcon } from "ui/icons";

export function Header() {
  return (
    <div className={styles.container}>
      <LogoIcon />
      <NavMobile />
    </div>
  );
}
