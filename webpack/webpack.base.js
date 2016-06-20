const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DirectoryDefaultFilePlugin = require("./plugins/DirectoryDefaultFilePlugin.js");

// The root directory of Bentotime
const baseDir = path.resolve(__dirname, "..");

const defaultConfiguration = {
  baseDir: baseDir, // Needed because our webpack files are in a folder
  resolve: {

    // Using this we can import `Button`, rather than `Button.jsx`
    extensions: ["", ".js", ".jsx", ".css", ".scss"],

    // Shortcuts to folders.  We can start an import path from `app`, `test`, and `public`.
    alias: {
      app: path.join(baseDir, "app"),
      main: path.join(baseDir, "app/main-process"),
      renderer: path.join(baseDir, "app/renderer-process"),
      test: path.join(baseDir, "test"),
      public: path.join(baseDir, "public")
    }
  },

  module: {
    // Run ESLint before our application starts.
    preLoaders: [{ test: /.jsx?$/, loader: "eslint", exclude: /node_modules/ }],

    // Loaders help us by telling webpack what and how we should compile
    loaders: [
      {
        test: /\.jsx?$/, // Find all files that end with `.js` and `.jsx`
        loader: "babel", // Compile all of these with Babel
        exclude: /node_modules/ // `node_modules` should already be compiled
      },
      {
        test: /\.scss$/, // Find all files that end with `.scss`
        loader: ExtractTextPlugin.extract("css!sass"), // Compile the styles!
        exclude: /node_modules/
      },

      // This one is helping one of our electron dependencies compile
      // We don't have an `exclude` property. We want it to run for all json requires
      { test: /\.json$/, loader: "json" }
    ]
  },

  plugins: [
    // Extracts our css and separates it from the javascript
    new ExtractTextPlugin("styles.css", { allChunks: true }),

    // Resolves files with the same name as the containing folder
    new webpack.ResolverPlugin([ new DirectoryDefaultFilePlugin() ])
  ],

  // Tells eslint where our config file is
  eslint: { configFile: path.join(baseDir, ".eslintrc.js") }
};

// Depending on the environment we are running in, we need different properties
// The environment is set in our `package.json`, during the use of npm scripts
switch(process.env["NODE_ENV"]) {
  case "test":
    Object.assign(defaultConfiguration, {
      devtool: "inline-source-map",  // For karma-sourcemap-loader

      // We are providing these externals from outside webpack.
      // "cheerio" is set as window because we're using it to fake the use of the DOM.
      externals: {
        "cheerio": "window",
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true,
        "electron": true
      }
    });
    break;

  case "production":
    // Shrinks our code for production to reduce download size.
    defaultConfiguration.plugins = defaultConfiguration.plugins.concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]);
    break;

  case "development":
  default:
    Object.assign(defaultConfiguration, {
      // Emits a source-map so we can map line numbers from our pre-compiled es2015
      // to our outputted and concatenated line numbers. cheap-module-eval-source-map is
      // fast, but not safe for production.
      devtool: "#cheap-module-eval-source-map",

      // DevServer, instead of outputting built files, keeps them in memory and spins up
      // a server with them. This way, we actively refresh whenever there's a code change.
      devServer: {
        contentBase: path.join(baseDir, "public"),
        port: 8080,
        historyApiFallback: {
          index: "/"
        }
      }
    });
    break;
}

module.exports = defaultConfiguration;
