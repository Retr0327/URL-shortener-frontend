const api = process.env.NEXT_PUBLIC_API_SERVICE;

if (!api) {
  throw new Error('API_SERVICE undefined');
}

const API = { url: `${api}/url` } as const;

export default API;
