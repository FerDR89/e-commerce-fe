import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: { email: "", token: "" },
  //   effects: [localStorageEffect("user")],
});
