/**
 * @description Returns a file loader. Surprise - it processes files!
 * @memberOf module:Loaders
 * @see https://webpack.js.org/loaders/file-loader/
 * @return {Loader}
 */
function getFileLoader() {
  return {
    loader: 'file-loader',
    options: {},
  };
}

module.exports = getFileLoader;
