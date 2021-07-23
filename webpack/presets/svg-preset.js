const getSVGRLoader = require('../loaders/svgr-loader');

/**
 * @description Return a SVG flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getSVGPreset() {
  return {
    test: /\.svg$/i,
    use: [getSVGRLoader()],
  };
}

module.exports = getSVGPreset;
