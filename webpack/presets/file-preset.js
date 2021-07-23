const getFileLoader = require('../loaders/file-loader');

/**
 * @description Return a file flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getFilePreset() {
  const loaders = [];
  loaders.push(getFileLoader());
  return {
    test: /\.(jpe?g|png|eot|ttf|woff)$/i,
    use: loaders,
  };
}

module.exports = getFilePreset;
