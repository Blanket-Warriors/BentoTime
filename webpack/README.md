Webpack
==========

[Webpack](https://webpack.github.io/) is a utility we use for taking all of our modules, running our [compilers](https://en.wikipedia.org/wiki/Compiler) on them, and merging them into a javascript file and a css file. There are a few reasonings behind using Webpack and compilers.

1. A separation of readability and performance. This ranges from using new javascript features and Sass, to improving performance by removing the impact of whitespace, comments, and long variable names.

2. Modularity. It's nice to be able to have all of our concerns in different files and folders without importing a crazy amount of javascript files in our .html files.

We have a few different configurations that do different things, but they all start with `webpack.base.js`.

#### `webpack.base.js`
This is the bulk of our Webpack configuration. Webpack has a lot of settings to keep track of, so we fully commented all of our file.

#### `webpack.main.js` and `webpack.renderer.js`
This extends our base build to be used with our `main-process` and `renderer-process`.

#### `plugins`
This folder holds any plugins that we have committed locally. Mostly, this is because a lot of webpack plugins are rather small in footprint and don't change much. It gives us a little more control over when these dependencies change, so that an update to one doesn't break our build process.
