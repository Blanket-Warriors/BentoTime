[![Dependency Status](https://david-dm.org/Blanket-Warriors/BentoTime.svg?style=flat)](https://david-dm.org/Blanket-Warriors/BentoTime)
[![Build Status](https://travis-ci.org/Blanket-Warriors/BentoTime.svg?branch=master)](https://travis-ci.org/Blanket-Warriors/BentoTime)

# BentoTime
A native pc/mac/linux app for reading and saving manga.

## Starting Development
  - install dependencies - `npm install`
  - Make sure all the tests are running - `npm test`
  - Run Webpack dev server and electron - `npm run dev-server`
  - Either open the app in a browser by pointing at `localhost:8080`, or open an electron app with `npm run electron`.

## Contributing
Use our [contribution repo](https://github.com/Blanket-Warriors/Style-Guide/tree/master/Contribution) to get an idea of the format we expect for PR's, commits, and issues.

## License
MIT © [Blanket Warriors](http://blanketwarriors.com)

## Dependencies
These are the main dependencies of BentoTime, and if you intend to use this repository to learn, these are the technologies you should be focusing on. Have fun and good luck!

- #### Lodash
[Lodash](https://lodash.com/docs) is a very solid and fast library of utility functions. Their documentation is fantastic, and we supply links in our readmes whenever possible.

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

- #### Rx
[RxJs](http://reactivex.io/) is a library that allows us to deal with asynchronous problems using the concept of observables. This is awesome because it allows us to deal with one interface when using asynchronous tasks that might normally be handled in different ways, such as api requests, streams, and listener events. Admittedly, it is not used to its fullest potential in this project because we mainly deal with simple api requests. However we thought it was a good learning opportunity and think that observables are just kinda cool. If you would like to get more into programming in this style, we'd recommend taking a look at [Jafar Husain's tutorial](http://reactivex.io/learnrx/), which is just awesome.

- #### Superagent
[Superagent](https://github.com/visionmedia/superagent) is an abstraction over javascript AJAX tools, and just makes dealing with requests really easy. We use it whenever we ping an api for Manga data.

## DevDependencies
These are dependencies that are not used much in the actual application, but facilitate it in building and using the application. This notably includes Electron, our compliation dependencies, and testing dependencies.

- #### Babel-Core
We use [Babel](https://babeljs.io/) to compile our Javascript with new features into plain old ES5. This helps us maintain compatibility with the Chrome runtime, while simultaneously letting us use all the new Javascript features.

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

- #### Electron-Packager and Electron-BuildPbooer
[Electron-Packager](https://github.com/electron-userland/electron-packager) and [Electron-Builder](https://github.com/electron-userland/electron-builder)are meant to be used together to create the applications for actual distribution. Our packager helps us make our `.exe` or `.app` file, while Builder helps us create the installation package. We have not yet implemented our build process with these, but it's coming soon!

- #### Electron-Debug
[Electron-Debug](https://github.com/sindresorhus/electron-debug) adds the Chrome debugging tools into Electron! Not much to say about that besides the fact that it's just plain useful.

- #### Electron-Prebuilt
[Electron](http://electron.atom.io/) lets us build native desktop applications using web technologies! [Electron-Prebuilt](https://github.com/electron-userland/electron-prebuilt), specifically, is for development, and lets us run our Electron application without compiling anything.

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

- #### Sass-Loader
[Sass-Loader](https://github.com/jtangelder/sass-loader) integrates our Node-Sass compilation to run inside Webpack. Aww yeee.

- #### Sinon
[Sinon](http://sinonjs.org/) is basically a massive library of test-related utilities. Huuuuugely useful library for testing anything and everything. We talk about it more in our `/test` directory READMEs.

- #### Source-Map-Support
[Moar source map](https://www.npmjs.com/package/source-map-support)!

- #### Webpack
[Webpack](https://webpack.github.io/) is a tool to help us compile and package our Javascript, and represents the centerpiece of our build process. It allows us to use [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [SASS](http://sass-lang.com/) and cool new Javascript features via [Babel](https://babeljs.io/) by taking code we write in those technologies, parsing them, and spitting our plain old CSS and EcmaScript5. The [React Webpack Cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html) is a pretty good place to start getting used to using Webpack with React.

- #### Webpack-dev-server
[Webpack-Dev-Server](https://github.com/webpack/webpack-dev-server) is some cool webpack middleware that runs a development server, automatically updates when our code changes. Means we can check our work faster.

- #### Webpack-Hot-Middleware
Not implemented, but [Webpack-Hot-Middleware](https://github.com/glenjamin/webpack-hot-middleware) lets Webpack-Dev-Server reload individual modules at a time. The glory in this is that it means when we make a code change, our test app can stay in the same state. AKA it doesn't restart every. friggin. time. For more info on that, read [webpack's introduction to Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
