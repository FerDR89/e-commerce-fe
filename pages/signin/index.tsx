import { LayOutWithOutSearchMobile } from "components/layout";
import { SignInPage } from "components/siging-page";
import type { NextPage } from "next";

const Signin: NextPage = () => {
  return (
    <LayOutWithOutSearchMobile>
      <SignInPage />
    </LayOutWithOutSearchMobile>
  );
};

export default Signin;
