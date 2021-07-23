const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');
const getLessLoader = require('../loaders/less-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  const loaders = [];
  loaders.push(MiniCssExtractPlugin.loader);
  loaders.push(getCssLoader());
  loaders.push(getLessLoader());

  return {
    test: /\.less$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
