/* Production Configuration
======================================================================= */
var webpack = require("webpack");
var productionConfig = require("./webpack.base.js");

productionConfig.plugins = productionConfig.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
]);

module.exports = productionConfig;
