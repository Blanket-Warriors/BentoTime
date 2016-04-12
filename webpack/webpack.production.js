/* Production Configuration
======================================================================= */
var webpack = require("webpack");
var productionConfig = require("./webpack.base.js");

// Shrinks our code for production to reduce download size.
productionConfig.plugins = productionConfig.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
]);

module.exports = productionConfig;
