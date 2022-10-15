import API from '@config';
import request from '@utils/request';

type PayloadType = { url: string };

const checkURL = async (payload: PayloadType) => {
  try {
    const result = await request({ method: 'POST', url: API.existence, payload });
    return [result, null];
  } catch (error) {
    console.error('checkURL: ', error);
    return [null, error];
  }
};

export default checkURL;
