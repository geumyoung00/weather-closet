import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Alias 설정 추가
    config.resolve.alias['@scss'] = path.join(__dirname, 'src/scss');

    // 추가적인 Webpack 설정 가능
    return config;
  },
};

export default nextConfig;
