import fetcher from "./fetcher";
import { API } from "src/constants";
import { CredentialsType } from "types";

const deleteShortURL = async (credentials: CredentialsType) => {
  const url = `${API}/url/delete`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("deleteShortURL: ", error);
    return [null, error];
  }
};

export default deleteShortURL;
