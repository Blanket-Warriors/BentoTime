/* Test Configuration
======================================================================= */
var testConfig = Object.assign({}, require('./webpack.base.js'), {
  devtool: 'inline-source-map'
});

module.exports = testConfig;
