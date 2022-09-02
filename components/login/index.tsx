import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { sendCode, getToken } from "lib/API";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";
import { Subtitle, Body } from "ui/texts";
import style from "./login.module.css";

const ButtonOrangeLarge = styled(ButtonOrange)`
  width: 333px;
  height: 50px;
`;

export function Login() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState({ email: "" });

  const handleEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = target.email.value;
    if (email) {
      const cleanEmail: string = email.toLowerCase().trim();
      const result = await sendCode(cleanEmail);
      result === true && setUserEmail({ email: cleanEmail });
    }
  };

  const handleCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const code = target.code.value;
    if (userEmail && code) {
      const result = await getToken(userEmail.email, code);
      //TODO GUARDAR EL TOKEN EN RECOIL
      result === true && router.push("search");
    }
  };

  return !userEmail ? (
    <section>
      <Subtitle>Ingresar</Subtitle>
      <form className={style.form__mobile} onSubmit={handleEmail}>
        <TextField
          type="text"
          name="email"
          placeholder="Ingresá tu email"
          width={"333px"}
          heightInput={"46px"}
        />
        <ButtonOrangeLarge>Continuar</ButtonOrangeLarge>
      </form>
    </section>
  ) : (
    <section>
      <Subtitle>Código</Subtitle>
      <form className={style.form__mobile} onSubmit={handleCode}>
        <TextField
          type="text"
          name="code"
          placeholder="12345"
          width={"333px"}
          heightInput={"46px"}
        />
        <Body>Te envíamos un código a tu email</Body>
        <ButtonOrangeLarge>Ingresar</ButtonOrangeLarge>
      </form>
    </section>
  );
}
