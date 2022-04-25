import type { NextPage } from "next";
import { Container } from "@mantine/core";
import { GetServerSideProps } from "next";
import { fetchAllShortURLs } from "src/services";
import URLShortener from "@containers/URLShortener";

const Home: NextPage = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <URLShortener />
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await fetchAllShortURLs();
  console.log("result", result);
  
  return {
    props: {},
  };
};
