import API from '@config';
import request from '@utils/request';
import { URL, Response } from 'types';

type PayloadType = Pick<URL, 'shortURL'>;
type ResponseType = Response<{ url: string }> | null;

const increaseClick = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request({ method: 'PUT', url: API.url, payload });
    return [result, null];
  } catch (error) {
    console.error('increaseClick: ', error);
    return [null, error];
  }
};

export default increaseClick;
