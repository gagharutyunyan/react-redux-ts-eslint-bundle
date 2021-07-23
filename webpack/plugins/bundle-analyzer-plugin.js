const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * @description analyzes bundle size
 * @memberOf module:Plugins
 * @return {Plugin}
 * @see https://www.npmjs.com/package/webpack-bundle-analyzer
 */
function getBundleAnalyzerPlugin() {
  return new BundleAnalyzerPlugin();
}

module.exports = getBundleAnalyzerPlugin;
