import fetcher from "./fetcher";
import { CredentialsType } from "types";

const deleteShortURL = async (credentials: CredentialsType) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url/delete`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("deleteShortURL: ", error);
    return [null, error];
  }
};

export default deleteShortURL;
