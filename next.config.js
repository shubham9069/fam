/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'fusion.metcloud.shop',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'shubham-store-.metcloud.shop',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zalon.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
