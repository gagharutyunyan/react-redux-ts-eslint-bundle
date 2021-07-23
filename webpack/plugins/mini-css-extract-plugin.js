const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @description Returns a plugin, which extracts common css from chunks in separate chunk.
 * @memberOf module:Plugins
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/
 * @return {MiniCssExtractPlugin}
 */
function getMiniCssExtractPlugin() {
  return new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  });
}

module.exports = getMiniCssExtractPlugin;
