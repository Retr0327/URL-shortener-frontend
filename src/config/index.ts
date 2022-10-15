const api = process.env.NEXT_PUBLIC_API_SERVICE;

if (!api) {
  throw new Error('API_SERVICE undefined');
}

const url = `${api}/url`;

const API = { root: api, url, existence: `${url}/existence` } as const;

export default API;
