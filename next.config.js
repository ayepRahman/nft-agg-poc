/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // config.experiments = { topLevelAwait: true };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "d1iczm3wxxz9zd.cloudfront.net",
      "lh3.googleusercontent.com",
      "ikzttp.mypinata.cloud",
      "ipfs.io",
    ],
  },
};

module.exports = nextConfig;
