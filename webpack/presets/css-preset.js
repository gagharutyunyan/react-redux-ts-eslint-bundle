const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  const loaders = [];
  loaders.push(MiniCssExtractPlugin.loader, getCssLoader());

  return {
    test: /\.css$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
