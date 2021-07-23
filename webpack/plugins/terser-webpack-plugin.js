const TerserWebpackPlugin = require('terser-webpack-plugin');

/**
 * @description Returns terser plugin which minimize js properly
 * @memberOf module: {Plugins}
 * @return {Plugin}
 * @see https://webpack.js.org/plugins/terser-webpack-plugin/
 */
function getTerserPlugin() {
  return new TerserWebpackPlugin({
    parallel: true,
  });
}

module.exports = getTerserPlugin;
