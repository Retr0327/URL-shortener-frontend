import axios, { AxiosRequestConfig, Method } from "axios";

const fetcher =
  (method: Method, credentials: { [key: string]: any }) => (url: string) => {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: method !== "GET" ? credentials : null,
    };

    return axios(config).then((res) => res.data);
  };

export default fetcher;
