import { MainLayout } from "components/layout";
import { ThanksPage } from "components/thanks-page";
import type { NextPage } from "next";

const Thanks: NextPage = () => {
  return (
    <MainLayout>
      <ThanksPage />
    </MainLayout>
  );
};

export default Thanks;
