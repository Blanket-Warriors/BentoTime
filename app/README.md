App
-----
Bentotime, like most Electron applications, is built with multiple processes:

 - The [`main-process`](http://electron.atom.io/docs/tutorial/quick-start/#main-process) is the script that manages everything. It is our main source of interaction with the operating system we're running on, and does things like open windows, create our system menus, and quit the application. When our main-process is compiled, it ends up as `main.js` in our build folder.

 - The [`renderer-process`](http://electron.atom.io/docs/tutorial/quick-start/#renderer-process) is the window itself. We're essentially running a super-powered webpage within our renderer. It has all the things we'd expect in something like Chrome, but with the added benefit of Node.js APIs. This allows us to do things like write files and spin up servers. When our main-process is compiled, it ends up as `renderer.js` and `styles.css` in our build folder.
