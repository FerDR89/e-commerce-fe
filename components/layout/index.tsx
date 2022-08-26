import { Footer } from "components/footer";
import { Header } from "components/header";
import { ReactNode } from "react";

type LayOutProps = {
  children: ReactNode;
};

export function LayOut({ children }: LayOutProps) {
  <Header></Header>;
  {
    children;
  }
  <Footer></Footer>;
}
