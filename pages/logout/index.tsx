import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LayOutWithOutSearch } from "components/layout";
import { LogoutPage } from "components/logout-page";
import { useEffect } from "react";

const Logout: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayOutWithOutSearch>
      <LogoutPage />
    </LayOutWithOutSearch>
  );
};

export default Logout;
