import fetcher from "./fetcher";
import { CredentialsType } from "types";

const createShortURL = async (credentials: CredentialsType) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url`;

  return fetcher({
    method: "POST",
    url,
    credentials,
  });
};

export default createShortURL;
