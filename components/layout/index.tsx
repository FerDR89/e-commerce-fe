import { ReactNode } from "react";
import { Footer } from "components/footer";
import {
  Header,
  HeaderWithOutSearchMobile,
  HeaderWithOutSearch,
} from "components/header";
import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}

export function LayOutWithOutSearchMobile({ children }: LayoutProps) {
  return (
    <>
      <HeaderWithOutSearchMobile />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}

export function LayOutWithOutSearch({ children }: LayoutProps) {
  return (
    <>
      <HeaderWithOutSearch />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}
