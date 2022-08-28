import { ReactNode } from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";
import styles from "./layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header></Header>
      <main className={styles.container}>{children}</main>
      <Footer></Footer>
    </>
  );
}
