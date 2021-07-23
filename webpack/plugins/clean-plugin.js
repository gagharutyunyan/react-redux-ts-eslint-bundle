const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @description Returns plugin, which cleans build folder before build
 * @memberOf module:Plugins
 * @return {CleanWebpackPlugin}
 * @see https://webpack.js.org/guides/output-management/
 */
function getCleanPlugin() {
  return new CleanWebpackPlugin();
}

module.exports = getCleanPlugin;
