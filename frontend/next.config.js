const { resolve } = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // ES Moduleの読み込みを許可する
  experimental: {
    esmExternals: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = resolve(__dirname, 'src');

    return config;
  },
};