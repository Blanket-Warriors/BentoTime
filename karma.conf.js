// Sets up Karma to run tests with PhantomJS.
// PhantomJS helps with simulating xhr.

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'tests.webpack.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['progress'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
