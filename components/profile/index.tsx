import { useForm } from "react-hook-form";
import styled from "styled-components";
import swal from "sweetalert";
import { updateMe, UserUpdateProps } from "lib/API";
import { useWindowSize } from "lib/hooks";
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
  const { width } = useWindowSize();

  const inputWidth = width < 376 ? 333 : 457;

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {},
    mode: "onSubmit",
  });

  const handleForm = async (data: UserUpdateProps) => {
    const response = await updateMe(data);
    if (response === true) {
      swal("Sus datos han sido actualizados correctamente");
      reset({ fullname: "", address: "", phone_number: "" });
    } else {
      swal("Tuvimos un inconveniente, por favor vuelva a intentarlo");
    }
  };

  return (
    <>
      <div className={style.text__container}>
        <Subtitle>Perfil</Subtitle>
      </div>

      <form className={style.profile__form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          type="text"
          name="fullname"
          placeholder="Ingresá tu nombre"
          labelText="Nombre completo"
          width={inputWidth + "px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: false }}
        />
        <TextField
          type="text"
          name="address"
          placeholder="Ingresá tu dirección"
          labelText="Dirección"
          width={inputWidth + "px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: false }}
        />
        <TextField
          type="number"
          name="phone_number"
          placeholder="Ingresá tu teléfono"
          labelText="Teléfono"
          width={inputWidth + "px"}
          heightInput={"46px"}
          control={control}
          rules={{ required: false }}
        />
        {width < 376 ? (
          <ButtonOrangeL>Guardar</ButtonOrangeL>
        ) : (
          <ButtonOrangeXL>Guardar</ButtonOrangeXL>
        )}
      </form>
    </>
  );
}
