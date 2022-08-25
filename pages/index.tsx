import type { NextPage } from "next";
import styled from "styled-components";
import {
  ButtonBlue,
  ButtonFuchsia,
  ButtonLightBlue,
  ButtonOrange,
} from "ui/button";
import { TextField } from "ui/textfield";
import { Subtitle, Title } from "ui/texts";

const Home: NextPage = () => {
  return (
    <div>
      <form>
        <TextField
          name="nombre"
          placeholder="ingresá aquí tu nombre"
          type="text"
          labelText="Nombre"
          heightInput={37}
          width={325}
          borderColor={"violet"}
        />
        <TextField
          name="email"
          placeholder="ingresá aquí tu email"
          type="email"
          heightInput={37}
          width={325}
          borderColor={"yellow"}
        />
        <ButtonFuchsia onClick={() => console.log("Fuchsia")}>
          Fuchsia
        </ButtonFuchsia>
      </form>
    </div>
  );
};

export default Home;
