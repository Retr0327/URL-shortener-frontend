import fetcher from "./fetcher";
import { API } from "src/constants";
import { CredentialsType } from "types";

const createShortURL = async (credentials: CredentialsType) => {
  const url = `${API}/url`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default createShortURL;
