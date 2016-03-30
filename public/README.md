Public
=========

Public is a directory that stores all the raw files we are accessing for our application.  This include all of our compiled code (in our build folder), our assets, and our `index.html` homepage. This is where everything is served from when we run `Electron`.

#### Packaging
This is also where we package our Electron application. This is the reason there's another `package.json` in this directory: we're acting as if this is another complete application, which it is. Since our compiled code ends up in this directory, we don't want and don't need to ship all of the crazy amount of dependencies we have in our development code. This reduces package time and download speed. Yay!
