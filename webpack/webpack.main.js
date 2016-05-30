var baseConfig = require("./webpack.base.js");
var path = require("path");
var baseDir = baseConfig.baseDir;

Object.assign(baseConfig, {
  entry: path.join(baseDir, "app/main/main.js"),
  output: {
    path: path.join(baseDir, "public"),
    filename: "main.js"
  },

  node: { __dirname: true }
});

module.exports = baseConfig;
