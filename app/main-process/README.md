Main Process
-------------
[main-process.jsx](./main-process.jsx) is the root and entry-point of our application (this is specified in our [main webpack configuration](../webpack/webpack.main.js)). All of our compiled code starts here.

## How to use:
Once compiled into `main.js`, this becomes the initial process run by Electron. This is determined from the `package.json` in our public folder. This separate application is housed within our public folder and runs entirely on the compiled code of `main-process` and `renderer-process`.

## Code Description
#### onAppReady

#### onAppWindowsClosed

#### on
