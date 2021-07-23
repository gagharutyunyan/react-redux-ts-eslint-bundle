const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');
const devWebpackConfig = require('./webpack.dev');
const prodWebpackConfig = require('./webpack.prod');

const mixin = process.env.NODE_ENV === 'production' ? prodWebpackConfig : devWebpackConfig;

const config = merge(baseWebpackConfig, mixin);
module.exports = config;
