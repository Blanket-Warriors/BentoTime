App.jsx
=========
App is the root and entry-point of our application (this is specified in our [base webpack configuration](../webpack/webpack.base.js)). All of our compiled code starts here. The `app` folder also includes all of our application directories, so explore any of those to learn more about each individual part of the application.

#### How to use:

Once compiled, App.js will append our entire application to the DOM node with the id `mountPoint`.  So the only thing we need to do is include the compiled Javascript script (using app.jsx as an entry point), and add the `mountPoint` node to our application.  That ends up looking something like this:

```html
<body>
  <div>
    <div id="mountPoint" />
  </div>
  <script async src="build/main.js"></script>
</body>
```

The entire html of our application is found in [index.html](../public/index.html).


#### Further Detail

Because it's the entry-point of our application, a lot of the technologies we use are introduced in its use. Not much is actually happening, but there is some syntax that might be unfamiliar to the uninitiated. To learn about the individual dependencies we use, it might be useful to [read about them](https://github.com/Blanket-Warriors/BentoTime#dependencies).

Our custom [Store](http://redux.js.org/docs/basics/Store.html) is created in `store.js`, and is used to handle our data.  Read: all of our Manga and User data is stored here.

Our [Provider](http://redux.js.org/docs/basics/UsageWithReact.html) is provided (heh) to us by [React-Redux](https://github.com/Blanket-Warriors/BentoTime#react-redux), and simply makes the store available to all components in the application without passing it explicitly. We pass it our store, and React-Redux takes care of the rest (pretty much)!

Our [Router](https://github.com/reactjs/react-router) is initiated here as well, since our entire page is being affected pretty much right at the top.  We do have a wrapper for all of our routes [(Layout.js)](./containers/Layout), but we keep it nested within our `<Router />`, since it makes it easier to use all the information about our Route.
