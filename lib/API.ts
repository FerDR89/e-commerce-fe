const API_BASE_URL = "https://e-commerce-be.vercel.app/api";

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

export { sendCode, getToken };
