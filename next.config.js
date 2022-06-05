/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    APY_KEY: process.env.APY_KEY,
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
