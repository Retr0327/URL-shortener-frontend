import { URL } from 'types';
import { useRouter } from 'next/router';
import { Loader } from '@components/UI';
import { GetServerSideProps } from 'next';
import { getShortURL } from '@services/get';

type Props = { shortURL: Pick<URL, 'shortURL'> };

function ShortURL(props: Props) {
  const router = useRouter();
  const { shortURL: shortURLParams } = props;
  const { shortURL, isLoading, isError } = getShortURL(shortURLParams as unknown as string);

  if (isLoading) return <Loader />;

  if (isError || !shortURL || shortURL.status === 'failed') {
    router.push('/500', { pathname: router.pathname });
    return null;
  }

  if (shortURL.msg === 'expired') {
    router.replace('/');
    return null;
  }

  const { fullURL } = shortURL.data;
  router.push(fullURL);
}

export default ShortURL;

export const getServerSideProps: GetServerSideProps<Pick<URL, 'shortURL'>> = async (context) => {
  const { params } = context;
  const { shortURL } = params as { shortURL: string };
  const redirect = { redirect: { permanent: false, destination: '/404' } };

  if (shortURL.length !== 5) {
    return redirect;
  }

  return { props: { shortURL } };
};
