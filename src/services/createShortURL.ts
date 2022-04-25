import fetcher from "./fetcher";
import { CredentialsType } from "types";

const createShortURL = async (credentials: CredentialsType) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default createShortURL;
