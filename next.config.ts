import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Next.js 16 Turbopack 관련 경고 해결을 위해 추가
  turbopack: {},
  // Webpack 모드에서 파일 변경 감지를 위한 설정
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
