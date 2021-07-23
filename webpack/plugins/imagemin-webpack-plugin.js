const ImageminPlugin = require('imagemin-webpack');

/**
 * @description Returns a plugin, which process images
 * @memberOf module:Plugins
 * @return {ImageminPlugin}
 * @see https://www.npmjs.com/package/imagemin-webpack
 */
function getImagminPlugin() {
  return new ImageminPlugin({
    bail: false, // Ignore errors on corrupted images
    cache: true,
    maxConcurrency: 4,
    imageminOptions: {
      plugins: [
        ['mozjpeg', { progressive: true, quality: 85 }],
        ['pngquant', { speed: 4, quality: [0.65, 0.85] }],
        ['svgo', { quality: 85 }],
      ],
    },
  });
}

module.exports = getImagminPlugin;
