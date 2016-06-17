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

## Documentation
We have READMEs for almost every module in this project, so definitely check those out!  There are also a few precursory things to read that can help you understand the repo.
 - [A bird's eye view of Bentotime](./documentation/Overview.md)
 - [Introducing our Dependencies](./documentation/Dependencies.md)
