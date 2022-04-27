import { Container } from "@mantine/core";
import { GetServerSideProps } from "next";
import { URLShortenerPropsType } from "types";
import { fetchAllShortURLs } from "src/services";
import URLShortener from "@containers/URLShortener";

function Home({ allURLs }: URLShortenerPropsType) {
  return (
    <Container style={{ marginTop: 100 }}>
      <URLShortener allURLs={allURLs} />
    </Container>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps<
  URLShortenerPropsType
> = async (context) => {
  const result = await fetchAllShortURLs();
  const { status, data } = result[0];

  return {
    props: {
      allURLs: data,
    },
  };
};
