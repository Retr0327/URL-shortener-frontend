import useSWR from 'swr';
import API from '@config';
import { Response } from 'types';
import request from '@utils/request';

type ResData = { fullURL: string };

type ResponseType = Response<ResData> | null;

const getShortURL = (shortURL: string) => {
  const { data, error } = useSWR<ResponseType>(`${API.root}/${shortURL}`, (url) =>
    request({ url, method: 'GET' })
  );

  return { shortURL: data, isLoading: !error && !data, isError: error };
};

export default getShortURL;
