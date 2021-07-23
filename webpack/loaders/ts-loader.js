/**
 * Returns a typescript-loader. It process all ts and tsx files
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/ts-loader
 */
function getTypeScriptLoader() {
  return {
    loader: 'ts-loader',
    options: {},
  };
}

module.exports = getTypeScriptLoader;
