const path = require("path");
const baseConfig = require("./webpack.base.js");
const baseDir = baseConfig.baseDir;
const testEnvironment = process.env["NODE_ENV"] === "test";

module.exports = Object.assign({}, baseConfig, {

  // Our test environment doesn't know that electron exists.
  target: testEnvironment ? "node" : "electron",

  entry: path.join(baseDir, "app/main-process/main-process.js"),

  // Output a `main.js` file into [root]/public/build.
  output: {
    path: path.join(baseDir, "public", "build"),
    filename: "main.js"
  },

  // We want __dirname to be based from our build folder. If this were true, __dirname
  // would be based from our pre-compiled code.
  node: { __dirname: false }
});
