/**
 * Returns a svgr laader. It allow you to use plain svg images as React components
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/@svgr/webpack
 */
function getSVGRLoader() {
  return {
    loader: '@svgr/webpack',
    options: {},
  };
}

module.exports = getSVGRLoader;
