import { useForm } from "react-hook-form";
import styled from "styled-components";
import style from "./search.module.css";
import { ButtonOrange, ButtonBlue } from "ui/button";
import { TextField } from "ui/textfield";
import { useWindowSize } from "lib/hooks";
import { useRouter } from "next/router";
import swal from "sweetalert";

const ButtonOrangeMobile = styled(ButtonOrange)`
  width: 328px;
  height: 37px;
`;
const ButtonOrangeDesk = styled(ButtonOrangeMobile)`
  width: 148px;
`;
const ButtonBlueMobile = styled(ButtonBlue)`
  width: 255px;
  height: 37px;
`;
const ButtonBluegeDesk = styled(ButtonBlueMobile)`
  width: 350px;
`;

interface FormInput {
  query: string;
}

export function SearchMobile() {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      query: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormInput) => {
    const q = data.query;
    const cleanQuery: string = q.toLowerCase().trim();
    router.push({
      pathname: "/search",
      query: { q: cleanQuery },
    });
    reset({ query: "" });
  };

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
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      query: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormInput) => {
    const q = data.query;
    const cleanQuery: string = q.toLowerCase().trim();
    router.push({
      pathname: "/search",
      query: { q: cleanQuery },
    });
    reset({ query: "" });
  };

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

export function SearchHome() {
  const router = useRouter();
  const { width } = useWindowSize();
  const inputWidth = width < 376 ? 253 : 347;
  const inputHeight = width < 376 ? 39 : 43;

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      query: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormInput) => {
    const q = data.query;
    const cleanQuery: string = q.toLowerCase().trim();
    router.push({
      pathname: "/search",
      query: { q: cleanQuery },
    });
    reset({ query: "" });
  };

  return (
    <form className={style.form__mobile} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Ingresá tu producto aquí"
        width={inputWidth + "px"}
        heightInput={inputHeight + "px"}
        borderColor={"var(--Wht)"}
        control={control}
        name="query"
        rules={{ required: true }}
      />
      {width < 376 ? (
        <ButtonBlueMobile>Buscar</ButtonBlueMobile>
      ) : (
        <ButtonBluegeDesk>Buscar</ButtonBluegeDesk>
      )}
    </form>
  );
}
