import API from '@config';
import request from '@utils/request';

type PayloadType = { url: string; expireDate: Date };

const createShortURL = async (payload: PayloadType) => {
  try {
    const result = await request({ method: 'POST', url: API.url, payload });
    return [result, null];
  } catch (error) {
    console.error('createShortURL: ', error);
    return [null, error];
  }
};

export default createShortURL;
