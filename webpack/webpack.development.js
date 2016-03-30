/* Development Configuration
======================================================================= */
var developmentConfig = require('./webpack.base.js');
var path = require('path');
var baseDir = developmentConfig.baseDir;

Object.assign(developmentConfig, {
  devServer: {
    contentBase: path.join(baseDir, 'public')
  }
});

module.exports = developmentConfig;
