const getDevServer = require('./parts/dev-server');

module.exports = {
  mode: 'development',
  devServer: getDevServer(),
};
