var baseConfig = require("./webpack.base.js");
var path = require("path");
var baseDir = baseConfig.baseDir;

Object.assign(baseConfig, {
  entry: path.join(baseDir, "app/main-process/main-process.js"),
  output: {
    path: path.join(baseDir, "public", "build"),
    filename: "main.js"
  },

  node: { __dirname: false }
});

module.exports = baseConfig;
