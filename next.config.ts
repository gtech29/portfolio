/** @type {import('next').ExperimentalConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      exclude: ["firebase-admin"],
    },
  },
};

export default nextConfig;
