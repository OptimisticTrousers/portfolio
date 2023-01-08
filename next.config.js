/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "still-brushlands-93140.herokuapp.com", "optimisticbucket.s3.amazonaws.com"]
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
