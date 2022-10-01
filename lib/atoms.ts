import { atom } from "recoil";
import { ProductProps } from "lib/types";

export const userEmailState = atom({
  key: "userEmail",
  default: { email: "" },
});
export const userTokenState = atom({
  key: "userToken",
  default: { token: "" },
});
