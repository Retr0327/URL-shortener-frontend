const api = process.env.NEXT_PUBLIC_API_SERVICE;
const externalApi = process.env.NEXT_PUBLIC_EXTERNAL_API_SERVICE;

if (!api) {
  throw new Error('API_SERVICE undefined');
}

if (!externalApi) {
  throw new Error('EXTERNAL_API_SERVICE undefined');
}

const url = (apiURL: string) => `${apiURL}/url`;

const API = {
  internal: url(api),
  external: url(externalApi),
} as const;

export default API;
