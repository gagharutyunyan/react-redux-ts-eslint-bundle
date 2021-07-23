const webpack = require('webpack');

/**
 * @description Returns plugin, which makes webpack use hash instead of ids for modules tracking
 * @memberOf module:Plugins
 * @return {webpack.HashedModuleIdsPlugin}
 * @see
 */
function getHashedModulesIdsPlugin() {
  return new webpack.ids.HashedModuleIdsPlugin({
    hashFunction: 'md4',
    hashDigest: 'base64',
    hashDigestLength: 8,
  });
}

module.exports = getHashedModulesIdsPlugin;
