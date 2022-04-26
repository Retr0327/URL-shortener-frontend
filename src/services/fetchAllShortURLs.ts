import fetcher from "./fetcher";

const fetchAllShortURLs = async () => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/url/all`;

  try {
    const result = await fetcher({ method: "POST", url });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default fetchAllShortURLs;
