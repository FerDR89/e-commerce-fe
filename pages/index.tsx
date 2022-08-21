import type { NextPage } from "next";

import styled from "styled-components";
import { Subtitle, Title } from "ui/texts";

const Home: NextPage = () => {
  return (
    <div>
      <Title>Soy el title</Title>
      <Subtitle>Soy el Subtitle</Subtitle>
    </div>
  );
};

export default Home;
