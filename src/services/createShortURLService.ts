import fetcher from "./fetcher";

const createShortURLService = async (credentials: any) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default createShortURLService;
