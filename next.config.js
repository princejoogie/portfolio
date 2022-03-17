module.exports = {
  reactStrictMode: true,
};

// const withImages = require("next-images");
// module.exports = withImages({
//   esModule: true,
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   ignoreTypes: ["svg"],
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });
//
//     return config;
//   },
// });
