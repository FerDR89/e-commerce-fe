import { HomePage } from "components/home-page";
import { LayOutWithOutSearch } from "components/layout";
import fetchAPI from "lib/API";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <LayOutWithOutSearch>
      <HomePage />;
    </LayOutWithOutSearch>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const res = await fetch("https://e-commerce-be.vercel.app/api/products");
//   const data = await res.json();

//   console.log(data);

//   return { props: { data } };
// }
