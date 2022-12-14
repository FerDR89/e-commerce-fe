const API_BASE_URL = "https://e-commerce-be.vercel.app/api";
// const API_BASE_URL = "http://localhost:3000/api";
import { ProductsResponse, UserUpdateProps } from "lib/types";

export default async function fetchAPI(
  input: RequestInfo,
  options: RequestInit
) {
  const url = API_BASE_URL + input;
  const token = localStorage.getItem("auth_token");

  if (token) {
    options.headers = { ...options.headers, authorization: `Bearer ${token}` };
  }

  const res = await fetch(url, options);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw { status: res.status, message: res.statusText };
  }
}

async function sendCode(email: string) {
  const res = await fetchAPI("/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.result;
}

const getToken = async (email: string, code: number) => {
  const res = await fetchAPI("/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code }),
  });

  if (res.token) {
    localStorage.setItem("auth_token", res.token);
    return res.token;
  } else {
    return false;
  }
};

const updateMe = async (data: UserUpdateProps) => {
  const res = await fetchAPI("/me", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.updated === true) {
    return true;
  } else {
    return false;
  }
};

const createOrder = async (productId: string) => {
  const res = await fetchAPI(`/order?productId=${productId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    //Data mínima que me pide el endpoint para poder crear una orden.
    body: JSON.stringify({
      product_configuration: {
        color: "violeta",
        quantity: 10,
      },
      payer: {
        phone: { mobile: 987654321 },
        identification: { name: "enrique", lastname: "perez" },
        address: {
          street: "calle falsa",
          number: 1234,
          between_street: "calle verdadera y calle falsa 2",
          city: "una localidad",
          province: "una provincia",
        },
      },
      shipments: {
        receiver_address: {
          street: "calle falsa",
          number: 1234,
          between_street: "calle verdadera y calle falsa 2 ",
          city: "una localidad",
          province: "una provincia",
        },
      },
    }),
  });

  if (!res.url) {
    return false;
  }
  return res.url;
};

const getProductsByQuery = async (query: string, offset: number) => {
  const res = await fetchAPI(`/search?q=${query}&limit=3&offset=${offset}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const formattedResults = res.results.map((i: ProductsResponse) => {
    return {
      img: i.Images,
      productId: i.objectID,
      price: i.UnitCost,
      title: i.Name,
    };
  });

  return { formattedResults, pagination: res.pagination };
};

export { sendCode, getToken, updateMe, createOrder, getProductsByQuery };
