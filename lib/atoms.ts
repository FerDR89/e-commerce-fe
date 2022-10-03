import { atom } from "recoil";

export const userEmailState = atom({
  key: "userEmail",
  default: { email: "" },
});

export const userTokenState = atom({
  key: "userToken",
  default: { token: "" },
});

export const userPurchasedProduct = atom({
  key: "userProduct",
  default: { product: "" },
});
