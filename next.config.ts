import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/the-serenade-town' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/the-serenade-town/' : '',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
