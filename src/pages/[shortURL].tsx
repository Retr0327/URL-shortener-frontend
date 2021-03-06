import useSWR from "swr";
import { API } from "../constants";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Center, Loader } from "@mantine/core";

interface ShortURLParams extends ParsedUrlQuery {
  shortURL: string;
}
type ServerPros = {
  shortURL: string;
};

const fetcher = (url: string, shortURL: string) =>
  fetch(`${url}/${shortURL}`).then((res) => res.json());

function ShortURL({ shortURL }: ServerPros) {
  const router = useRouter();
  const { data, error } = useSWR([API, shortURL], fetcher);

  if (!data) {
    return (
      <Center mt={50}>
        <Loader />
      </Center>
    );
  }

  if (data.message === "Expired") {
    router.push("/");
    return <></>;
  }

  const { fullURL } = data;

  router.push(fullURL);
}

export default ShortURL;

export const getServerSideProps: GetServerSideProps<
  ServerPros,
  ShortURLParams
> = async (context) => {
  const { params } = context;
  const { shortURL } = params as ShortURLParams;

  return {
    props: {
      shortURL: shortURL,
    },
  };
};
