var baseConfig = require("./webpack.base.js");
var path = require("path");
var baseDir = baseConfig.baseDir;

Object.assign(baseConfig, {
  entry: path.join(baseDir, "app/renderer-process/renderer-process.jsx"),
  output: {
    path: path.join(baseDir, "public", "build"),
    publicPath: "/build/",
    filename: "index.js"
  },
});

module.exports = baseConfig;
