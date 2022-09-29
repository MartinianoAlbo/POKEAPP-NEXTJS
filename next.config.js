/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['raw.githubusercontent.com'] //permite el dominio
  }
}

module.exports = nextConfig
