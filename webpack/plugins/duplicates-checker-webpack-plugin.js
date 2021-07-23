const DuplicateCheckerWebpackPlugin = require('duplicate-package-checker-webpack-plugin');

/**
 * @description Check for duplicates packages in bundle and warns if it exists
 * @memberOf module:Plugins
 * @return {Plugin}
 * @see https://www.npmjs.com/package/duplicate-package-checker-webpack-plugin
 */
function getDuplicatesCheckerWebpackPlugin() {
  return new DuplicateCheckerWebpackPlugin();
}

module.exports = getDuplicatesCheckerWebpackPlugin;
