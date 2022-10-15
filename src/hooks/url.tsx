import { string } from 'yup';
import { useRef } from 'react';
import checkURL from '@services/create/urlExistence';

function cacheTest(asyncValidate: Function) {
  let _valid = false;
  let _value = '';

  return async (value: string) => {
    if (!value) {
      return true;
    }

    if (value !== _value) {
      const response = await asyncValidate(value);
      _value = value;
      _valid = response;
      return response;
    }
    return _valid;
  };
}

function isURLValid(url: string) {
  const schema = string();
  return schema.isValidSync(url);
}

async function checkURLUnique(url: string) {
  if (!isURLValid(url)) {
    return false;
  }

  const [result, error] = await checkURL({ url });

  if (result == null || error) {
    return null;
  }

  const { exist } = result.data;
  return !exist;
}

function useCachedURL() {
  return useRef(cacheTest(checkURLUnique));
}

export default useCachedURL;
