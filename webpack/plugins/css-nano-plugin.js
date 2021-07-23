const CssnanoPlugin = require('cssnano-webpack-plugin');

/**
 * @description Returns a Cssnano plugin which optimize an minify css output
 * @memberOf module:Plugins
 * @return {CssnanoPlugin}
 * @see https://www.npmjs.com/package/cssnano-webpack-plugin
 */
function getCssNanoPlugin() {
  return new CssnanoPlugin({
    test: /\.css$/,
  });
}

module.exports = getCssNanoPlugin;
