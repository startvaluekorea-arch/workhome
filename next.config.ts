import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Webpack 모드에서 파일 변경 감지를 위한 설정
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
