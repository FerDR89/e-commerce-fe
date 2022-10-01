import { useRouter } from "next/router";
import { useSetUserEmail, useSetUserToken } from "lib/hooks";
import styled from "styled-components";
import { LargeT, Body } from "ui/texts";
import styles from "./closeSesion.module.css";

type CloseSesionProps = {
  email: string;
};

const LargeTFuchsia = styled(LargeT)`
  color: var(--fuchsia);
  font-size: 18px;
  cursor: pointer;
`;

const BodyWht = styled(Body)`
  color: var(--Wht);
`;

export const CloseSesion = ({ email }: CloseSesionProps) => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useSetUserEmail();
  const [userToken, setUserToken] = useSetUserToken();
  return (
    <div className={styles.container__close}>
      <BodyWht>{email}</BodyWht>
      <LargeTFuchsia
        onClick={() => {
          localStorage.clear();
          setUserEmail({ email: "" });
          setUserToken({ token: "" });
          router.replace("/logout");
        }}
      >
        Cerrar sesión
      </LargeTFuchsia>
    </div>
  );
};
