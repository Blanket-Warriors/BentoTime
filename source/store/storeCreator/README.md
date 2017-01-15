storeCreator
============
`storeCreator` takes in our browser history, and reducers, and creates a store that listens to both. Our store holds our state, and listens for our dispatch functions to send our actions.

How to use
-----------
The process of creating a store with our storeCreator is very straightforward. We just need to give it our initialState, and our history (if we don't include these, we'll just default to emptiness and sadness).
```js
import storeCreator from "renderer/data/storeCreator";

const store = storeCreator(initialState, {
  history: hashHistory 
});
```

How it works
------------
Since the storeCreator is basically just connecting a lot of our data technologies, it actually is not much code at all! It's just very abstract.

#### `middleware`
We create an array of all of our middlware. This is so we can run applyMiddleware on them easily with [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fapply). The middlewares we use are:

 - [thunkMiddleware](https://www.npmjs.com/package/redux-thunk) lets us create actionCreators that return functions, which basically makes writing asynchronous actions possible. 
 - [routerMiddleware](https://github.com/reactjs/react-router-redux) allows us to use react-router details in our store. Really nice for dealing with the state of routes. 
 - [localStorageMiddleware](./middleware/localStorageMiddleware) saves our state to localStorage whenever we update our state (errr... I mean whenever it makes sense to save it).
 - We run [loggerMiddleware](https://www.npmjs.com/package/redux-logger) when we're in a development environment, and this logs out information about our changing states.

#### `createStore(reducers, initialState, middleware)`
This is the method we use to create our store, applying our reducers, initialState, and middleware. There isn't a huge reason to go into how this works, since there are great in-depth explanations in the redux documentation.  Read more about the [createStore](http://redux.js.org/docs/api/createStore.html) and [applyMiddleware](http://redux.js.org/docs/api/applyMiddleware.html) methods there!
