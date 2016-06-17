Store
------
This file is technically more of a store creator than an actual store. It takes in our browser history, and reducers, and creates a store that listens to both. Our store holds our state, and listens for our dispatch functions to send our actions.

It uses a few things to accomplish this:

#### Redux Utilities
[createStore](http://redux.js.org/docs/api/createStore.html), [combineReducers](http://redux.js.org/docs/api/combineReducers.html), and [applyMiddleware](http://redux.js.org/docs/api/applyMiddleware.html) are utilities given to us by Redux that simplify the process of creating a store.

##### MiddleWare
[routerMiddleware](https://github.com/reactjs/react-router-redux) allows us to use react-router details in our store. Really nice for dealing with the state of routes. [thunkMiddleware](https://www.npmjs.com/package/redux-thunk) lets us create actionCreators that return functions, which basically makes writing asynchronous actions possible. Our [loggerMiddleware](https://www.npmjs.com/package/redux-logger) gives us some information to use while debugging state, and is incredibly useful.
