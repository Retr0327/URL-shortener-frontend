import fetcher from "./fetcher";
import { CredentialsType } from "types";

const fetchAllShortURLs = async () => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/all_urls`;

  try {
    const result = await fetcher({ method: "POST", url });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default fetchAllShortURLs;
