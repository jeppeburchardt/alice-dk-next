const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const extra = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        imagesName: "[hash].[ext]"
        /* config for next-optimized-images */
      }
    ],
    {
      exportTrailingSlash: true,
      exportPathMap: function() {
        return {
          "/": { page: "/" }
        };
      }
    }
  ],
  extra
);
