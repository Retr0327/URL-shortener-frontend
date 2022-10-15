const domain = process.env.NEXT_PUBLIC_INTERNAL_SERVER_DOMAIN;

if (!domain) {
  throw new Error('NEXT_PUBLIC_INTERNAL_SERVER_DOMAIN undefined');
}

const isProduction = process.env.NODE_ENV === 'production';
const api = isProduction ? '/api' : domain;

const url = `${api}/url`;

const API = { root: api, url, existence: `${url}/existence` } as const;

export default API;
