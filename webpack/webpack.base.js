const entryOutput = require('./parts/entry-output');

const getTypeScriptPreset = require('./presets/ts-preset');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getLessPreset = require('./presets/less-preset');
const getLintPreset = require('./presets/lint-preset');
const getSVGPreset = require('./presets/svg-preset');

const getBasePlugins = require('./parts/plugins');
const getResolve = require('./parts/resolve');

const analyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [getLintPreset(), getTypeScriptPreset(), getCssPreset(), getFilePreset(), getSVGPreset(), getLessPreset()],
  },
  plugins: getBasePlugins(analyzeMode),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};
