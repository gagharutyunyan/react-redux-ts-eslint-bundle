const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @description Babel just removes ts code. So there is no way to fail build with error on a type error. This plugin is for that/
 * @memberOf module: {Plugins}
 * @return {Plugin}
 * @see https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
 */
function getTsCheckerPlugin() {
  return new ForkTsCheckerWebpackPlugin();
}

module.exports = getTsCheckerPlugin;
