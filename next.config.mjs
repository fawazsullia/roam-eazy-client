/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
          protocol: 'http',
          hostname: 'localhost',
          port: '8080',
          pathname: '/api/resource/**',
      },
      {
        protocol: 'https',
        hostname: 'roameazy.com',
        pathname: '/api/resource/**',
    },
  ],  }
};

export default nextConfig;
