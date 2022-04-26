/** @type {import('next').NextConfig} */
let ignoreDuringBuilds = false;

if (process.env.NODE_ENV === "production") {
  ignoreDuringBuilds = true;
}

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds,
  },
};

module.exports = nextConfig;
