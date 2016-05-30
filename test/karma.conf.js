var webpackConfig = require("../webpack/webpack.window.js");

module.exports = function(config) {
  configuration = {
    // Bentotime's root directory is up one
    basePath: "..",

    // Load all "tests" files into the browser
    files: [
      "./app/**/testfile.js",
      "./app/**/testfile.jsx"
    ],

    // Testing frameworks to use
    frameworks: ["mocha", "chai", "sinon"],

    // Run webpack with a sourcemap on all "tests" files
    preprocessors: {
      "./app/**/testfile.js": ["webpack", "sourcemap"],
      "./app/**/testfile.jsx": ["webpack", "sourcemap"]
    },

    // Open the files in Chrome without security so we can send cross-site API requests
    browsers: ["Chrome_without_security"],
    customLaunchers: {
      Chrome_without_security: {
        base: "Chrome",
        flags: ["--web-security=no"]
      },

      Chrome_travis_ci: {
        base: "Chrome",
        flags: ["--no-sandbox", "--web-security=no"]
      }
    },

    // Pretend that api requests for assets aren't failing
    proxies: {
      "/public/": "/test/fixtures/public/",
      "/assets/": "/test/fixtures/public/assets/",
      "/build/": "/test/fixtures/public/build/"
    },

    // Format our test output
    colors: true,
    reporters: ["mocha"],
    mochaReporter: {
      colors: {
        success: "green",
        info: "blue",
        warning: "yellow",
        error: "red"
      }
    },

    // Capture the browser, run it once, and exits.
    singleRun: true,
    watch: false,

    // Use our webpack test config to load our modules
    webpack: webpackConfig,

    webpackServer: {
      noInfo: true // Don't spam the console with logs!
    },

    // Format our compilation output
    webpackMiddleware: {
      noInfo: true, // Don't spam the console with logs!
      stats: {
        colors: true,   // Use colors!
        assets: false,  // Don't display asset information
        chunks: false,  // Don't display chunk information
        modules: false, // Don't display built module information
        children: false // Don't display messages from child loaders
      }
    },

    // Plugins we're using
    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-sinon",
      "karma-webpack",
      "karma-mocha-reporter",
      "karma-chrome-launcher",
      "karma-sourcemap-loader"
    ]
  };

  // If we're running our tests with Travis CI, use chrome and run once.
  if(process.env.TRAVIS){
    configuration.browsers = ["Chrome_travis_ci"];
    configuration.singleRun = true;
    configuration.watch = false;
  }

  config.set(configuration);
};
