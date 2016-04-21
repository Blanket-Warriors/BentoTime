var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var baseDir = path.resolve(__dirname, "..");

/* Set default resolution path to the same name as the folder
 * eg `app/components/Button` finds `app/components/Button/Button.js`
======================================================================= */
function DirectoryDefaultFilePlugin(files) {}
DirectoryDefaultFilePlugin.prototype.apply = function(resolver) {
  resolver.plugin("directory", function(req, done) {
    var directory = resolver.join(req.path, req.request);

    resolver.fileSystem.stat(directory, function(error, stat) {
      if (error || !stat) return done();
      if (!stat.isDirectory()) return done();
      if(Boolean(directory.match(/node_modules/))) return done();

      resolver.doResolve("file", {
        path: req.path,
        query: req.query,
        request: resolver.join(directory, path.basename(directory))
      }, function (error, result) {
        return done(undefined, result || undefined);
      });
    });
  });
};

/* Default Configuration
======================================================================= */
module.exports = {
  baseDir: baseDir, // Needed because our webpack files are in a folder
  entry: path.join(baseDir, "app/app.jsx"),
  output: {
    path: path.join(baseDir, "public", "build"),
    publicPath: "/build/",
    filename: "main.js"
  },

  resolve: {
    // Using this we can import `Button`, rather than `Button.jsx`
    extensions: ["", ".js", ".jsx", ".css", ".scss"],

    // Shortcuts to folders.  We can start an import path from `app`, `test`, and `public`.
    alias: {
      app: path.join(baseDir, "app"),
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
        test: /\.jsx?$/,        // Find all files that end with `.js` and `.jsx`
        loader: "babel",        // Compile all of these with Babel
        exclude: /node_modules/ // `node_modules` should already be compiled
      },
      {
        test: /\.scss$/,        // Find all files that end with `.scss`
        loader: ExtractTextPlugin.extract("css!sass") // Compile the styles!
      }
    ]
  },

  plugins: [
    // Extracts our css and separates it from the javascript
    new ExtractTextPlugin("styles.css", { allChunks: true }),

    // Resolves files with the same name as the containing folder
    new webpack.ResolverPlugin([ new DirectoryDefaultFilePlugin() ])
  ],

  node: { fs: "empty" },  // Ignore node features. Electron will supply these for us.
  eslint: { configFile: path.join(baseDir, ".eslintrc.js") }
};
