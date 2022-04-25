import { URLShortenerPropsType } from "types";
import URLShortenerForm from "./URLShortenerForm";

function URLShortener({ allURLs }: URLShortenerPropsType) {
  return <URLShortenerForm />;
}

export default URLShortener;
