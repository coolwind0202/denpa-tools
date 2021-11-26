/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  cleanupIDs: false,
                  /*
                  removeHiddenElems: false,
                  removeUnknownsAndDefaults: false,
                  removeUnusedNS: false,
                  removeUselessDefs: false,
                  */
                }
              ]
            }
          }
        }]
    });

    return config;
  }
}
