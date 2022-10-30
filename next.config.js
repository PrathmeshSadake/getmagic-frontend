/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
