/**
 * Returns a less-loader. It parses less
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/less-loader
 */
function getLessLoader() {
  return {
    loader: 'less-loader',
    options: {
      lessOptions: {
        // modifyVars: {
        //   'primary-color': '#1DA57A',
        //   'link-color': '#1DA57A',
        //   'border-radius-base': '2px',
        // },
        javascriptEnabled: true,
      },
    },
  };
}

module.exports = getLessLoader;
