/* Test Configuration
======================================================================= */
var testConfig = Object.assign({}, require("./webpack.base.js"), {
  devtool: "inline-source-map",

  externals: {
    "cheerio": "window",
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  }
});

module.exports = testConfig;
