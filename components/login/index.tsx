import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { sendCode, getToken } from "lib/API";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";
import { Subtitle, Body } from "ui/texts";
import style from "./login.module.css";
import { useSetUser } from "lib/hooks";

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
  const [user, setUser] = useSetUser();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const handleEmail = async (data: FormInput) => {
    const email = data.email;
    if (email) {
      const cleanEmail: string = email.toLowerCase().trim();
      const result = await sendCode(cleanEmail);
      result === true && setUser({ ...user, email: cleanEmail });
      reset({ email: "" });
    }
  };

  const handleCode = async (data: FormInput) => {
    const code = data.code;
    if (user.email && code) {
      const result = await getToken(user.email, code);
      if (result === false) {
        alert("Unauthorized token");
      } else {
        router.push("/");
      }
    }
  };

  return !user.email ? (
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
