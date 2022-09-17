import { useSetUser } from "lib/hooks";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";
import { Subtitle } from "ui/texts";
import style from "./profile.module.css";

const ButtonOrangeL = styled(ButtonOrange)`
  width: 333px;
  height: 50px;
`;
const ButtonOrangeXL = styled(ButtonOrangeL)`
  width: 457px;
`;

export function Profile() {
  const router = useRouter();
  const [user, setUser] = useSetUser();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {},
    mode: "onSubmit",
  });

  const handleForm = () => {};
  return (
    <>
      <div className={style.text__container}>
        <Subtitle>Perfil</Subtitle>
      </div>

      <form className={style.profile__form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          type="text"
          name="name"
          placeholder="Ingresá tu nombre"
          labelText="Nombre completo"
          width={"333px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: true }}
        />
        <TextField
          type="text"
          name="address"
          placeholder="Ingresá tu dirección"
          labelText="Dirección"
          width={"333px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: true }}
        />
        <TextField
          type="number"
          name="tel"
          placeholder="Ingresá tu teléfono"
          labelText="Teléfono"
          width={"333px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: true }}
        />
        <ButtonOrangeL>Guardar</ButtonOrangeL>
      </form>
    </>
  );
}
