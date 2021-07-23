const webpack = require('webpack');
/**
 * @description Returns a context replacement plugin. It cuts momentjs locales out.
 * @memberOf module:Plugins
 * @return {ContextReplacementPlugin}
 * @see https://www.npmjs.com/package/cssnano-webpack-plugin
 */
function getContextReplacementPlugin() {
  return new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en|/);
}

module.exports = getContextReplacementPlugin;
