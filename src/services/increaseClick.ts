import fetcher from "./fetcher";
import { CredentialsType } from "types";

const increaseClick = async (credentials: CredentialsType) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url/increase`;

  try {
    const result = await fetcher({ method: "PUT", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("increaseClick: ", error);
    return [null, error];
  }
};

export default increaseClick;
