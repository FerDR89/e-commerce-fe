import { HomePage } from "components/home-page";
import { LayOutWithOutSearch } from "components/layout";
import fetchAPI from "lib/API";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <LayOutWithOutSearch>
      <HomePage />
    </LayOutWithOutSearch>
  );
};

export default Home;
