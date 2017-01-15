App
===
Bentotime, like most Electron applications, is built with multiple processes:

#### `main-process`
In electron, the [`main-process`](http://electron.atom.io/docs/tutorial/quick-start/#main-process) is our main source of interaction with the operating system we're running on, and does things like open windows, create our system menus, and quit the application. When our main-process is compiled, it ends up as `main.js` in our build folder.

#### `renderer-process`
The [`renderer-process`](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process) is the window itself. We're essentially running a super-powered webpage within our renderer. It has all the things we'd expect in something like Chrome, but with the added benefit of Node.js APIs. This allows us to do things like write files and spin up servers. When our main-process is compiled, it ends up as `renderer.js` and `styles.css` in our build folder.


Main
=============
[main-process.jsx](./main-process.jsx) is the root and entry-point of our application (this is specified in our [main webpack configuration](../webpack/webpack.main.js)). All of our compiled code starts here.

How to use
-----------
Once compiled into `main.js`, this becomes the initial process run by Electron. This is determined from the `package.json` in our public folder. This separate application is housed within our public folder and runs entirely on the compiled code of `main-process` and `renderer-process`.

How it works
-------------
#### crashReporter
All this does is report crashes to the designated url. However, we don't have a url for this... sooooo...

#### onAppReady
On [`ready`](http://electron.atom.io/docs/api/app/#event-ready) is an event fired by Electron. It is generally where we do a lot of application setup, as it's the first thing that's run after Electron is done loading. In `onAppReady`, we do a few things:

  - We set up a [`new BrowserWindow`](http://electron.atom.io/docs/api/browser-window/), with some visual properties. We also set `web-security` to false for our development builds. All this does is let us send api requests from a server-served website (basically, it's the same idea as [CORS with chrome extensions](https://developer.chrome.com/extensions/xhr)). A production build of Bentotime is running from local files, so it doesn't need this.
  - We load up our [renderer](../renderer-process) window with the appropriate version of Bentotime, and open the devTools if we are in a development build.
  - We make sure that our process finishes when all the windows are closed.
  - We create the menus that appear at the top of the application (like `File`, `Edit`, `View`, etc...)

#### onAppWindowsClosed
 - All this does is quit out our application when we cloase all the windows. The only operating system we don't do this for is `Darwin` (MacOS), since that is the standard behavior for that operating system.
