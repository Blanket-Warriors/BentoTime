[![Build Status](https://travis-ci.org/Blanket-Warriors/BentoTime.svg?branch=master)](https://travis-ci.org/Blanket-Warriors/BentoTime)
[![Dependency Status](https://david-dm.org/Blanket-Warriors/BentoTime.svg?style=flat)](https://david-dm.org/Blanket-Warriors/BentoTime)
[![devDependency Status](https://david-dm.org/Blanket-Warriors/BentoTime/dev-status.svg)](https://david-dm.org/Blanket-Warriors/BentoTime#info=devDependencies)

# BentoTime
A native pc/mac/linux app for reading and saving manga.

## Getting Started With Development
  1. install dependencies - `npm install`
  2. Make sure all the tests are running - `npm test`
  3. Run Webpack dev server and electron - `npm start`
  4. Refresh the electron app when the development server has started.

#### Other Useful CLI Commands

Command                     |Description
----------------------------|---------------
**`npm run packager`**      | Builds distributable copies of BentoTime into `/public/packages`.
**`npm run electron:prod`** | Builds a production copy of BentoTime into `/public/build` and runs electron based on it.
**`npm run dev-build`**     | Builds a development copy of BentoTime (aka un-minified and with source-maps).
**`npm run server:window`** | Runs our development server. We can use this if we just want to test in Chrome.
**`npm run clean`**         | Simply removes the build and packages folder.
**`npm run build:prod`**    | Builds a production copy of BentoTime.
**`npm run build:dev`**     | Builds a development copy of BentoTime.
**`electron ./public/`**    | Run electron, using the current build and public files.  Needs Electron installed with `-g`.

## Contributing
Use our [contribution repo](https://github.com/Blanket-Warriors/Style-Guide/tree/master/Contribution) to get an idea of the format we expect for PR's, commits, and issues.

## License
MIT © [Blanket Warriors](http://blanketwarriors.com)

## Dependencies
These are the main dependencies of BentoTime, and if you intend to use this repository to learn, these are the technologies you should be focusing on. Have fun and good luck!

- #### Isomorphic-Fetch
[Isomorphic-Fetch](https://github.com/matthew-andrews/isomorphic-fetch) gives us the same interface for dealing with api requests from the client and server. We use it whenever we ping an api for Manga data, because it just simplifies api calls.

- #### Lodash 
[Lodash](https://lodash.com/docs) is a very solid and fast library of utility functions. Their documentation is fantastic, and we supply links in our readmes whenever possible.

- #### Moment
[Moment.js](http://momentjs.com/) is a time library. This is useful because we plan to use multiple sources for gathering manga titles, and it's useful to have a library that can keep all of our time-related data in the same format. As a plus, it also gives us methods for dealing with time and comparing dates, etc.

- #### React
[React](https://facebook.github.io/react/) helps us structure the views of our application.

- #### React-DOM
Starting at React v.0.14, Facebook split out React's DOM functionality into [React-DOM](https://facebook.github.io/react/). This probably had to do with the fact that people were using React in all sorts of different contexts, like [React Native](https://facebook.github.io/react-native/), [React Canvas](https://github.com/Flipboard/react-canvas), and other custom translations. However, we're just making a simple web app, so all this means is that we use the React-DOM module where we attach our React components to a node on the HTML DOM.

- #### React-Redux
[React-Redux](https://github.com/reactjs/react-redux) connects React and Redux together with a few small helpers.

- #### React-Router
[React-Router](https://github.com/reactjs/react-router) is the cleanest router available for React. It helps us keep track of all our container views.

- #### React-Router-Redux
[React-Router-Redux](https://github.com/reactjs/react-router-redux) helps us keep the state of React-Router in sync with the state of Redux.

- #### Redux
[Redux](https://github.com/reactjs/redux) is a bit of a pattern we use for storing our state. Redux gives us our store and dispatcher. It's a library that helps us manage the dataflow of our application.

- #### Redux-Logger and Redux-Devtools
[Redux-Logger](https://github.com/fcomb/redux-logger) and [Redux-Devtools](https://github.com/gaearon/redux-devtools) are just tools to help us debug our application.

- #### Redux-Thunk
[Redux-Thunk](https://github.com/gaearon/redux-thunk) helps us deal with asynchronous tasks using action creators that return functions instead of actions.

## DevDependencies
These are dependencies that are not used much in the actual application, but facilitate it in building and using the application. This notably includes Electron, our compliation dependencies, and testing dependencies.

- #### Babel-Core
We use [Babel](https://babeljs.io/) to compile our Javascript with new features into plain old ES5. This helps us maintain compatibility with the Chrome runtime, while simultaneously letting us use all the new Javascript features. All of our Babel settings are found in our `package.json`.

- #### Babel-ESLint
Lets our ESLint understand our Babel ways. Basically, ESLint is just a platform, and [Babel-ESLint](https://github.com/babel/babel-eslint) tells ESLint what to look for.

- #### Babel-Loader
Lets us use Babel with Webpack. Basically, Webpack runs Babel whenever it sees a `.js` or `.jsx` module. [Babel-Loader](https://github.com/babel/babel-loader) just tells Webpack how to use Babel. Yay loaders.

- #### Babel-preset-es2015
[Babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/) makes sure we have all the standart es2015 features like arrow fun-ctions, lets, consts, etc.

- #### Babel-preset-react
[Babel-preset-react](http://babeljs.io/docs/plugins/preset-react/) is used by Babel to compile our JSX features.

- #### Babel-preset-stage-0
[Babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/) lets us use the very cutting edge Javascript. So a bit more liable to change, but lets us use the cool shit.

- #### Chai
[Chai](https://duckduckgo.com/?q=chai+test) is an assertion library (gives us all our `expects`, `asserts`, etc). We use it for testing, and it works. Not much to say here.

- #### CSS-Loader
[CSS-Loader](https://github.com/MoOx/eslint-loader) is how we integrate our CSS compilation into our Webpack process.

- #### Electron-Packager
[Electron-Packager](https://github.com/electron-userland/electron-packager) is meant to create the applications for actual distribution. Our packager helps us make our `.exe` or `.app` file.

- #### Electron-Debug
[Electron-Debug](https://github.com/sindresorhus/electron-debug) adds the Chrome debugging tools into Electron! Not much to say about that besides the fact that it's just plain useful.

- #### Electron-Prebuilt
[Electron](http://electron.atom.io/) lets us build native desktop applications using web technologies! [Electron-Prebuilt](https://github.com/electron-userland/electron-prebuilt), specifically, is for development, and lets us run our Electron application without compiling anything.

- #### Enzyme
[Enzyme](http://airbnb.io/enzyme/) is a "Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output", and has quickly become the defacto tool to use in these purposes. It basically makes writing and reading tests around react dead simple. This is super important to us because this means that our tests can serve as an additional source of documentation for anyone reading through the project code.

- #### ESLint
[ESLint](http://eslint.org/) is a great tool that catches our mistakes before we run our stuff. We integrate it with our Webpack process in order to catch mistakes before we compile all of our code. It also helps us keep our coding-styles in sync, so it's easier to read through our repository. You'll also notice our .eslintignore and .eslintrc.js files, which are simply configuration details for ESLint.

- #### ESLint-Loader
[ESLint-Loader](https://github.com/MoOx/eslint-loader) is a Webpack loader for ESLint. It's how we integrate ESLint with our Webpack processes.

- #### ESLint-Plugin-React
[ESLint-Plugin-React](https://github.com/yannickcr/eslint-plugin-react) gives us special React-inspired rules, and lets us check our JSX with ESLint (otherwise it'll totes freak out as soon as it sees the first `<myComponent />`).

- #### Extract-Text-Webpack-Plugin
[Extract-Text-Webpack-Plugin](https://github.com/webpack/extract-text-webpack-plugin) Separates our compiled stylesheet and Javascript files. It will give us a slight performance boost as the amount of stylesheets grows, as we don't need to wait for the Javascript to run in order to use our styles. We might actually just move this into the production build rather than have it in both the production and development builds, since it does add a little time to our compilation process and blocks [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html) from happening.

- #### Inject-Loader
[Inject-Loader](https://github.com/plasticine/inject-loader) is for testing that lets us inject modules into our modules to write unit tests where we would want to mock things inside our module. Basically, if we do this, then we can say "Oh. This module failed", instead of "Oh. Either this module or any one of its dependencies failed".

- #### Karma
[Karma](https://karma-runner.github.io/0.13/index.html) is the actual tool that runs our tests. It opens up a web browser, uses that browser to run all of our test code, and displays the results. Since this is the actual thing running our tests, ALL of the test code comes through here, making it a central part of our testing scheme.

- #### Karma-Chrome-Launcher
[This is the thing that launches said web browser from Karma](https://github.com/karma-runner/karma-chrome-launcher). We are using Chrome, since Electron uses the Chrome runtime for all its shenanigans. We don't have to worry about compatibility with other browsers. And yes, you must have Chrome installed to use this.

- #### Karma-cli
[Karma-CLI](https://github.com/karma-runner/karma-cli) lets us run the sweet, sweet Karma commands.  Should probably install this with `-g`, but what the hell. We click Karma from our package.json, so yeah that's what's happening there.

- #### Karma-Mocha
Remember how we said everything testing runs through Karma? Yup, [Karma-Mocha](https://github.com/karma-runner/karma-mocha) helps Mocha run through Karma.  Surprise.

- #### Karma-Mocha-Reporter
[Karma-Mocha-Reporter](https://github.com/litixsoft/karma-mocha-reporter) actually doesn't have all that much to do with Mocha. It literally is just imitating what the Mocha CLI looks like, so we can make Karma results populate in a not-ugly way.

- #### Karma-Sinon
Ooooo wow [another](https://github.com/yanoosh/karma-sinon) Karma plugin to make something work. This time it's Sinon.

- #### Karma-Sourcemap-Loader
Since our compiled code's line numbers don't match our uncompiled line numbers, we use source maps. [Karma-Sourcemap-Loader](https://github.com/demerzel3/karma-sourcemap-loader) maps one line to the other, so we can get pretty line numbers. You'll notice when we compile, we are also given map files in our `public/build` folder. Yup. That's what those are for.

- #### Karma-Webpack
[Karma. Using. Webpack.](https://github.com/webpack/karma-webpack)

- #### Mocha
For testing! [Mocha](https://mochajs.org/) helps us describe the structure of our tests. It gives us our describe blocks, as well as a lot of utility. It's one of the important testing technologies we use along with Karma, Sinon, Chai, and Inject-Loader.

- #### Node-Sass
[Node-Sass](https://github.com/sass/node-sass) lets us use Sass by compiling our `.scss` files. Sass is dabes. Use Sass.

- #### React-Addons-Test-Utils
[React-Addons-Test-Utils](https://facebook.github.io/react/docs/test-utils.html) is a library of utilities for testing React components. This is a dependency for [Enzyme](http://airbnb.io/enzyme/), which is why we have it.  However, we don't use this dependency much directly, as we prefer the further-abstracted tool of Enzyme.

- #### Sass-Loader
[Sass-Loader](https://github.com/jtangelder/sass-loader) integrates our Node-Sass compilation to run inside Webpack. Aww yeee.

- #### Sinon
[Sinon](http://sinonjs.org/) is basically a massive library of test-related utilities. Huuuuugely useful library for testing anything and everything. We talk about it more in our `/test` directory READMEs.

- #### Webpack
[Webpack](https://webpack.github.io/) is a tool to help us compile and package our Javascript, and represents the centerpiece of our build process. It allows us to use [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [SASS](http://sass-lang.com/) and cool new Javascript features via [Babel](https://babeljs.io/) by taking code we write in those technologies, parsing them, and spitting our plain old CSS and EcmaScript5. The [React Webpack Cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html) is a pretty good place to start getting used to using Webpack with React.

- #### Webpack-dev-server
[Webpack-Dev-Server](https://github.com/webpack/webpack-dev-server) is some cool webpack middleware that runs a development server, automatically updates when our code changes. Means we can check our work faster. We are also working on implementing [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), but we're not quite there yet.
