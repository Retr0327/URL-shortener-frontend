import useSWR from 'swr';
import API from '@config';
import request from '@utils/request';
import { URL, Response } from 'types';

type ResponseType = Response<URL[] | []> | null;

const getAllShortURLs = () => {
  const { data, error, mutate } = useSWR<ResponseType>(API.url, (url) =>
    request({ url, method: 'GET' })
  );

  return { urls: data, isLoading: !error && !data, isError: error, mutate };
};

export default getAllShortURLs;
