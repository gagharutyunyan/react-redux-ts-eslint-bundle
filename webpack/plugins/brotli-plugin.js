const BrotliPlugin = require('brotli-webpack-plugin');

/**
 * @description Returns a plugin for brotli compression
 * @memberOf module:Plugins
 * @return {BrotliPlugin}
 * @see https://www.npmjs.com/package/brotli-webpack-plugin
 */
function getBrotliPlugin() {
  return new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html)$/,
    threshold: 10240,
    minRatio: 0.8,
  });
}

module.exports = getBrotliPlugin;
