const getOptimization = require('./parts/optimization');

const getImageminPlugin = require('./plugins/imagemin-webpack-plugin');
const getBrotliPlugin = require('./plugins/brotli-plugin');
const getCleanPlugin = require('./plugins/clean-plugin');
const getHashedModulesIdsPlugin = require('./plugins/hashed-modules-ids-plugin');

module.exports = {
  mode: 'production',
  optimization: getOptimization(),
  plugins: [getImageminPlugin(), getBrotliPlugin(), getCleanPlugin(), getHashedModulesIdsPlugin()],
};
