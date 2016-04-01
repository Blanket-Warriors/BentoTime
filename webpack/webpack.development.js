/* Development Configuration
======================================================================= */
var developmentConfig = require('./webpack.base.js');
var path = require('path');
var baseDir = developmentConfig.baseDir;

Object.assign(developmentConfig, {
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(baseDir, 'public'),
    port: 8080,
    historyApiFallback: {
      index: '/'
    }
  }
});

module.exports = developmentConfig;
