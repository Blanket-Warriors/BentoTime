A Bird's-Eye View of BentoTime
==============================
BentoTime is an [Electron]() application. This is an application that is meant to be run as a native desktop application, but built like a web application. It combines the power of the [Chrome]() web browser and [Node.js]() APIs. This gives us the power to do things like write local files and make external API calls without worrying about things like CORS.

Compilation
-----------
BentoTime is compiled with [Webpack](), [Babel](), and [SASS](). This means that the actual code we write isn't able to be run directly. Instead, it gets compiled into more standard Javascript and CSS, and THEN gets run. Although this has the one drawback in that it makes us wait a little longer when running our application for development, it has many benefits...

 * We can use new Javascript features that don't exist yet
 * We can use SASS
 * We can use [JSX]().

These make writing Javascript just a bit more fun. Also, compiling our code means that we can make performance adjustments that would otherwise make our code unreadable.

After our code is compiled, our newly-built files get placed in our [build](../public/build) directory. These are seen when we package our Electron application.

Nested Projects
---------------
One of the weird-looking things in an Electron application is the [package.json](../public/package.json) hangin' out in our public folder. This is used for our packaged Electron application. This helps us define settings specifically for that. For example, since our code is compiled and concattenated to our node_module dependencies by Webpack, we no longer need to include any dependencies for our built package files.

Testing
-------
Our browser-feature testing is handled by Karma. We don't have Node.js specific features yet, but those will eventually be handled by just Mocha/Chai. Our test folder has our Karma config file, as well as fake modules and responses. However, our actual test files are side-by-side with the modules they are testing.

App
---
Our app folder holds our entire Application! We intentionally set it up in modules. Each module has its own README and test file. Theoretically, this should make it very easy to determine how each file should act and be used. Definitely use the READMEs and test files to help learn how our application works.

That's it! Thanks for reading, and feel free to explore! :bento: :smile:
