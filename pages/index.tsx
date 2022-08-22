import type { NextPage } from "next";
import styled from "styled-components";
import {
  ButtonBlue,
  ButtonFuchsia,
  ButtonLightBlue,
  ButtonOrange,
} from "ui/button";
import { Subtitle, Title } from "ui/texts";

const Home: NextPage = () => {
  return (
    <div>
      <Title>Soy el title</Title>
      <Subtitle>Soy el Subtitle</Subtitle>
      <ButtonBlue onClick={() => console.log("Blue")}>Blue</ButtonBlue>
      <ButtonLightBlue onClick={() => console.log("Light Blue")}>
        Light Blue
      </ButtonLightBlue>
      <ButtonOrange onClick={() => console.log("Orange")}>Orange</ButtonOrange>
      <ButtonFuchsia onClick={() => console.log("Fuchsia")}>
        Fuchsia
      </ButtonFuchsia>
    </div>
  );
};

export default Home;
