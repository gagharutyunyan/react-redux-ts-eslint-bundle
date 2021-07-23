const getHtmlWebpackPlugin = require('../plugins/html-webpack-plugin');
const getBundleAnalyzerPlugin = require('../plugins/bundle-analyzer-plugin');
// const getDuplicatesCheckerWebpackPlugin = require('../plugins/duplicates-checker-webpack-plugin');
const getDotenvPlugin = require('../plugins/dotenv-plugin');
const getMiniCssExtractPlugin = require('../plugins/mini-css-extract-plugin');
const getTsCheckerPlugin = require('../plugins/ts-checker-plugin');
const getContextReplacementPlugin = require('../plugins/context-replacement-plugin');

/**
 @description Returns a list of all connected plugins
 @memberOf module:Parts
 @param {boolean} analyzeMode flag for start bundle-analyzer or not
 @return {Array}
 */
function getBasePlugins(analyzeMode) {
  const plugins = [];
  plugins.push(getHtmlWebpackPlugin());
  // plugins.push(getDuplicatesCheckerWebpackPlugin());
  plugins.push(getDotenvPlugin());
  plugins.push(getMiniCssExtractPlugin());
  plugins.push(getTsCheckerPlugin());
  plugins.push(getContextReplacementPlugin());
  if (analyzeMode) plugins.push(getBundleAnalyzerPlugin());

  return plugins;
}

module.exports = getBasePlugins;
