const Dotenv = require('dotenv-webpack');

/**
 * @description Returns a dotenv plugin which loads env variables from .env file
 * @memberOf module:Plugins
 * @return {CssnanoPlugin}
 * @see https://dev.to/sanfra1407/how-to-use-env-file-in-javascript-applications-with-webpack-18df
 */
function getDotenvPlugin() {
  return new Dotenv();
}

module.exports = getDotenvPlugin;
