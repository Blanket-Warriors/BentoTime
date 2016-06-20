const path = require("path");

function DirectoryDefaultFilePlugin(files) {}
DirectoryDefaultFilePlugin.prototype.apply = function(resolver) {
  resolver.plugin("directory", function(req, done) {
    var directory = resolver.join(req.path, req.request);

    resolver.fileSystem.stat(directory, function(error, stat) {
      if (error || !stat) return done();
      if (!stat.isDirectory()) return done();
      if(directory.match(/node_modules/)) return done();

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

module.exports = DirectoryDefaultFilePlugin;
