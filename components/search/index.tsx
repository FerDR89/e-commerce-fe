import { useForm } from "react-hook-form";
import styled from "styled-components";
import style from "./search.module.css";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";

const ButtonOrangeMobile = styled(ButtonOrange)`
  width: 328px;
  height: 37px;
`;
const ButtonOrangeDesk = styled(ButtonOrange)`
  width: 148px;
  height: 37px;
`;

interface FormInput {
  query: string;
}

export function SearchMobile() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      query: "",
    },
    mode: "onSubmit",
  });

  //TODO LLAMADA A LA API Y REDIRECCIONAMIENTO
  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <form className={style.form__mobile} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Ingresá tu producto"
        width={"325px"}
        heightInput={"37px"}
        borderColor={"var(--Wht)"}
        control={control}
        name="query"
        rules={{ required: true }}
      />
      <ButtonOrangeMobile>Buscar</ButtonOrangeMobile>
    </form>
  );
}

export function SearchDesktop() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      query: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <form className={style.form__desk} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Ingresá tu producto"
        width={"284px"}
        heightInput={"37px"}
        borderColor={"var(--Wht)"}
        control={control}
        name="query"
        rules={{ required: true }}
      />
      <ButtonOrangeDesk>Buscar</ButtonOrangeDesk>
    </form>
  );
}
