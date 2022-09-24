/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['images.unsplash.com','unsplash.com','www.pexels.com']
  }
}

module.exports = nextConfig
