const getBabelLoader = require('../loaders/babel-loader');
const getTypeScriptLoader = require('../loaders/ts-loader');
/**
 * Returns a flow for process ts and tsx input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getTypeScriptPreset() {
  return {
    test: /\.(ts|tsx)$/,
    use: [getBabelLoader()],
  };
}
module.exports = getTypeScriptPreset;
