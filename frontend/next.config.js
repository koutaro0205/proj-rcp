// requireでmodule読み込みを行っているため、打ち消し
// eslint-disable-next-line
const { resolve } = require('path');

module.exports = {
  // ES Moduleの読み込みを許可する
  experimental: {
    esmExternals: true,
    // loaderとしてswcを使用する
    swcLoader: true,
    // emotionの設定
    emotion: true,
  },
  // ミニファイ処理
  swcMinify: true,
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias["@"] = resolve(__dirname, "src");
    config.resolve.alias["@public"] = resolve(__dirname, "public");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
