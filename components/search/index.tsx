import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonOrange } from "ui/button";
import { TextField } from "ui/textfield";

const ButtonOrangeCustom = styled(ButtonOrange)`
  width: 328px;
  height: 37px;
`;

interface FormInput {
  query: string;
}

export function Search() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      query: "",
      name: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Ingresá tu producto"
        width={"200px"}
        heightInput={"200px"}
        borderColor={"var(--Wht)"}
        control={control}
        name="query"
        rules={{ required: true }}
      />
      <ButtonOrangeCustom>Buscar</ButtonOrangeCustom>
    </form>
  );
}
