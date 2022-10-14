import API from '@config';
import { URL } from 'types';
import request from '@utils/request';

type PayloadType = Pick<URL, 'shortURL'>;

const deleteShortURL = async (payload: PayloadType) => {
  try {
    await request({ method: 'DELETE', url: API.url, payload });
    return true;
  } catch (error) {
    console.error('deleteShortURL: ', error);
    return false;
  }
};

export default deleteShortURL;
