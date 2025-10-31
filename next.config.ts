import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'katherine-le.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
