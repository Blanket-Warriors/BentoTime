[![Build Status](https://travis-ci.org/Blanket-Warriors/BentoTime.svg?branch=master)](https://travis-ci.org/Blanket-Warriors/BentoTime)
[![Dependency Status](https://david-dm.org/Blanket-Warriors/BentoTime.svg?style=flat)](https://david-dm.org/Blanket-Warriors/BentoTime)
[![devDependency Status](https://david-dm.org/Blanket-Warriors/BentoTime/dev-status.svg)](https://david-dm.org/Blanket-Warriors/BentoTime#info=devDependencies)
BentoTime
=========
BentoTime is a pc/mac/linux app for reading and saving manga. BentoTime **does not host or distribute manga** and is merely a window into 3rd-party data. We created this project in hopes that it could be an easy way to read manga, as well as serve as a resource for learning to code with [React](./documentation/Dependencies.md#react) and [Electron](./documentation/Dependencies.md#electron-prebuilt). Expect clean code, impeccable documentation, and descriptive tests. Also, feel free to contribute if you would think you could help us with this goal!

Using BentoTime
---------------
If you just want to use BentoTime without entering a single line of code, just download the [newest release](https://github.com/Blanket-Warriors/BentoTime/releases), and get :bento:

![Bentotime](./public/assets/screenshots/library-view.png)

Getting Started With Development
--------------------------------
  1. Be sure you have [node.js](https://nodejs.org/en/) installed. We recommend using  [nvm](https://github.com/creationix/nvm) to install it.
  2. install dependencies - `npm install`
  3. Make sure all the tests are running - `npm test`
  4. Run Webpack dev server and electron - `npm start`

#### Documentation
We have READMEs for almost every module in this project, so definitely check those out!  There are also a few precursory things to read that can help you understand the repo.
 - [Our Dependencies](./documentation/Dependencies.md): The code we build on top of to make Bentotime
 - [Root Files](./documentation/Root-Files.md): Explains the files in this directory (our root folder)
 - [A :bird:'s Eye View](./documentation/Overview.md): Our application structure, and description some opinions we made with this.

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

Contributing
------------
 - Take a look at our [roadmap](./documentation/Roadmap.md) and [issues](https://github.com/Blanket-Warriors/BentoTime/issues) to get an idea of the ways we want to improve Bentotime. 
 - Use our [contribution repo](https://github.com/Blanket-Warriors/Style-Guide/tree/master/Contribution) to get an idea of the format we expect for PR's, commits, and issues. 

License
-------
[MIT](https://opensource.org/licenses/MIT) © [Blanket Warriors](http://blanketwarriors.com)
