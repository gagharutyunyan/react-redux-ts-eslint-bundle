const getCssNanoPlugin = require('../plugins/css-nano-plugin');
const getTerserPlugin = require('../plugins/terser-webpack-plugin');
/**
 * @description Returns optimization webpack object
 * minimizer - minimize js and css
 * splitChunks - move common code of chunks in separate bundle
 * @see https://webpack.js.org/plugins/split-chunks-plugin/
 * @memberOf module:Parts
 * @return {Part}
 */
function getOptimization() {
  return {
    minimizer: [getTerserPlugin(), getCssNanoPlugin()],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
}

module.exports = getOptimization;
