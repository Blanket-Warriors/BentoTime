Renderer Process
-----------------
[renderer-process.jsx](./renderer-process.jsx) is the root and entry-point of our application (this is specified in our [renderer webpack configuration](../webpack/webpack.renderer.js)). All of our compiled code starts here.

## How to use:
Once compiled into `index.js`, our entire application will become appended to the DOM node `mountPoint`.  So the only thing we need to do is include the compiled Javascript script (using `renderer-process.jsx` as an entry point), and add the `mountPoint` node to our application.  That ends up looking something like this:

```html
<body>
  <div>
    <div id="mountPoint" />
  </div>
  <script async src="build/main.js"></script>
</body>
```

The actual html file we use for our application is found in [index.html](../../public/index.html).

## Code Description
Because it's the entry-point of our rendered window, a lot of the technologies we use are introduced in its use. Not much is actually happening, but there is some syntax that might be unfamiliar to the uninitiated. To learn about the individual dependencies we use, it might be useful to [read about them](https://github.com/Blanket-Warriors/BentoTime#dependencies).

#### Store
Our custom [Store](http://redux.js.org/docs/basics/Store.html) is created in our [store creator](./data/store), and is used to handle our data.  Read: all of our Manga and User data is stored here. We also cache this in localStorage, so on application load, we check to see if that information is available. If a user has not used BentoTime, or doesn't have any cached data, we simply use an empty state.

Our [Provider](http://redux.js.org/docs/basics/UsageWithReact.html) is provided (heh) to us by [React-Redux](https://github.com/Blanket-Warriors/BentoTime#react-redux), and simply makes the store available to all components in the application without passing it explicitly. We pass it our store, and React-Redux takes care of the rest (pretty much)!

#### Router
Our [Router](https://github.com/reactjs/react-router) is initiated here as well, since our entire page is being affected pretty much right at the top.  We do have a wrapper for all of our routes [(Layout.js)](./containers/Layout), but we keep it nested within our `<Router />`, since it makes it easier to use all the information about our Route.

It's worth noting that we are using `hashHistory` instead of the commonly-used `browserHistory`. This is because we do not want to actually use full urls, as this messes with the way that Electron loads (it is run from our local files instead of from server requests).
