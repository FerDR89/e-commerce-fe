import styled from "styled-components";
import styles from "./closeSesion.module.css";
import { LargeT, Body } from "ui/texts";
import { useRouter } from "next/router";

type CloseSesionProps = {
  email: string;
};

const LargeTFuchsia = styled(LargeT)`
  color: var(--fuchsia);
  font-size: 18px;
`;

const BodyWht = styled(Body)`
  color: var(--Wht);
`;

export const CloseSesion = ({ email }: CloseSesionProps) => {
  const router = useRouter();
  return (
    <div className={styles.container__close}>
      <BodyWht>{email}</BodyWht>
      <LargeTFuchsia
        onClick={() => {
          localStorage.clear();
          router.push("/");
        }}
      >
        Cerrar sesión
      </LargeTFuchsia>
    </div>
  );
};
