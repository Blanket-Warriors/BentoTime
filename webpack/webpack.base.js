var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseDir = path.resolve(__dirname, '..');

/* Inform webpack that our node modules are commonjs
======================================================================= */
var nodeModules = {};
fs.readdirSync(path.join(baseDir, 'node_modules'))
  .filter(function(file) {
    return ['.bin'].indexOf(file) === -1;
  })
  .forEach(function(module) {
    nodeModules[module] = 'commonjs ' + module;
  });

/* Set default resolution path to the same name as the folder
======================================================================= */
function DirectoryDefaultFilePlugin(files) {}
DirectoryDefaultFilePlugin.prototype.apply = function (resolver) {
  resolver.plugin('directory', function (req, done) {
    var directory = resolver.join(req.path, req.request);

    resolver.fileSystem.stat(directory, function (error, stat) {
      if (error || !stat) return done();
      if (!stat.isDirectory()) return done();
      if(!!directory.match(/node_modules/)) return done();

      resolver.doResolve('file', {
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
  baseDir: baseDir,
  entry: path.join(baseDir, 'app/app.jsx'),
  output: {
    path: path.join(baseDir, 'public', 'build'),
    publicPath: '/build/',
    filename: 'main.js'
  },
  module: {
    preLoaders: [
      {
        test: /.jsx?$/, loader: 'eslint', exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      app: path.join(baseDir, 'app'),
      test: path.join(baseDir, 'test'),
      public: path.join(baseDir, 'public')
    }
  },
  plugins: [
    // Extracts our css and separates it from the javascript
    new ExtractTextPlugin('styles.css', { allChunks: true }),

    // Resolves files with the same name as the containing folder
    new webpack.ResolverPlugin([ new DirectoryDefaultFilePlugin() ])
  ],
  eslint: {
    configFile: './.eslintrc.js'
  }
};
