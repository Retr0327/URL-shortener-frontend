import fetcher from "./fetcher";
import { EXTERNAL_API } from "src/constants";

const fetchAllShortURLs = async () => {
  const url = `${EXTERNAL_API}/url/all`;

  try {
    const result = await fetcher({ method: "POST", url });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default fetchAllShortURLs;
