import { CustomFetchType } from "types";

async function fetcher({ method, url, credentials }: CustomFetchType) {
  const _credentials = credentials ?? {};
  const _method = method.toUpperCase();

  const response = await fetch(url, {
    credentials: "include",
    method: _method,
    body: _method !== "GET" ? JSON.stringify(_credentials) : null,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
}

export default fetcher;
