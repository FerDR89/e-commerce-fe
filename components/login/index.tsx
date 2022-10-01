import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import swal from "sweetalert";
import { sendCode, getToken } from "lib/API";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";
import { Subtitle, Body } from "ui/texts";
import style from "./login.module.css";
import { useSetUserEmail, useSetUserToken } from "lib/hooks";

const ButtonOrangeLarge = styled(ButtonOrange)`
  width: 333px;
  height: 50px;
`;

interface FormInput {
  email?: string;
  code?: number;
}

export function Login() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useSetUserEmail();
  const [userToken, setUserToken] = useSetUserToken();
  const [showCode, setShowCode] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const handleEmail = async (data: FormInput) => {
    const email = data.email;
    if (email) {
      const cleanEmail: string = email.toLowerCase().trim();
      const result = await sendCode(cleanEmail);
      if (result === true) {
        setUserEmail({ email: cleanEmail });
        setShowCode(true);
      }
      reset({ email: "" });
    }
  };

  const handleCode = async (data: FormInput) => {
    const code = data.code;
    if (userEmail.email && code) {
      const result = await getToken(userEmail.email, code);
      if (result === false) {
        swal("Unauthorized token");
      } else {
        setUserToken({ token: result });
        router.push("/profile");
      }
    }
  };

  return !showCode ? (
    <>
      <div className={style.text__container}>
        <Subtitle>Ingresar</Subtitle>
      </div>
      <form className={style.login__form} onSubmit={handleSubmit(handleEmail)}>
        <TextField
          type="text"
          name="email"
          placeholder="Ingresá tu email"
          labelText="Email"
          width={"333px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: true }}
        />
        <ButtonOrangeLarge>Continuar</ButtonOrangeLarge>
      </form>
    </>
  ) : (
    <>
      <div className={style.text__container}>
        <Subtitle>Código</Subtitle>
      </div>
      <form className={style.login__form} onSubmit={handleSubmit(handleCode)}>
        <TextField
          type="text"
          name="code"
          placeholder="Ingresá tu código"
          width={"333px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: true }}
        />
        <Body>Te envíamos un código a tu email</Body>
        <ButtonOrangeLarge>Ingresar</ButtonOrangeLarge>
      </form>
    </>
  );
}
