const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * First part of aliases is project aliases. Second one - is for package resolving.
 * @memberOf module:Parts
 * @return {Part}
 */
function getResolve() {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      features: path.resolve(__dirname, '../../src/components/features'),
      hoc: path.resolve(__dirname, '../../src/components/hoc'),
      pages: path.resolve(__dirname, '../../src/components/pages'),
      shared: path.resolve(__dirname, '../../src/components/shared'),
      forms: path.resolve(__dirname, '../../src/components/forms'),
      templates: path.resolve(__dirname, '../../src/components/templates'),
      '@': path.resolve(__dirname, '../../src/'),

      'rc-select': path.resolve(__dirname, '../../node_modules/rc-select'),
      'rc-virtual-list': path.resolve(__dirname, '../../node_modules/rc-virtual-list'),
    },
  };
}

module.exports = getResolve;
