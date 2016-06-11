const path = require("path");
const baseConfig = require("./webpack.base.js");
const baseDir = baseConfig.baseDir;
const testEnvironment = process.env["NODE_ENV"] === "test";

module.exports = Object.assign({}, baseConfig, {

  // We test in Chrome, which doesn't natively support electron. However, we need to be
  // aware of Electron outside of that to get access to node modules such as `fs`
  target: testEnvironment ? "web" : "electron-renderer",

  entry: path.join(baseDir, "app/renderer-process/renderer-process.jsx"),

  // Output an `rebderer.js` file into [root]/public/build
  // publicPath lets webpack-dev-server know where to look for this file on run-time
  output: {
    path: path.join(baseDir, "public", "build"),
    publicPath: "/build/",
    filename: "rebderer.js"
  }
});
