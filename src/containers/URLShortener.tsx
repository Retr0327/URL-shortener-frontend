import { Center } from "@mantine/core";
import URLTable from "@components/URLTable";
import { URLShortenerPropsType } from "types";
import URLShortenerForm from "./URLShortenerForm";

function URLShortener({ allURLs }: URLShortenerPropsType) {
  return (
    <>
      <URLShortenerForm />
      <Center mt={50}>
        <URLTable allURLs={allURLs} />
      </Center>
    </>
  );
}

export default URLShortener;
