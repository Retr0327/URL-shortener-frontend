import type { NextPage } from "next";
import { Container } from "@mantine/core";
import URLShortener from "@containers/urlShortener";

const Home: NextPage = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <URLShortener />
    </Container>
  );
};

export default Home;
