localStorageMiddleware
======================
localStorageMiddleware lets us save our store to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), so that we can have persistent data. Since we save to localStorage, we don't need to send nearly as many API requests, speeding up our application! Keep in mind that, for performance reasons, we don't always save to localStorage:

 - **`REQUEST` or `FAILURE` actions** - These create states that don't really need to be persistent, so screw 'em!
 - **[Debounce](https://lodash.com/docs#debounce)** - If we have a bunch of rapid state changes, we should only save the state to localstorage once.

How to Use
----------
To use localStorage, we need to both be able to save and retrieve items from localStorage. Usage would look something like this:
```js
import { createStore, applyMiddleware } from "redux";
import reducers from "renderer/data/reducers";

import localStorageMiddleware from "renderer/data/store/middleware/localStorageMiddleware";

// Get the state and convert it to a javascript object
const previousState = window.localStorage.getItem("bentotime");
const initialState = previousState ? JSON.parse(previousState) : {};

// Create our store, using our new initialState and our localStorage middleware
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(localStorageMiddleware)
);
```

#### Saving our State
To save our store's state, we just pass it into our store! It is applied with `applyMiddleware` like any other piece of [redux middleware](http://redux.js.org/docs/advanced/Middleware.html). Easy as pie!

#### Retrieving our State
To retrieve our state, there is 2 steps:
 - Get our state from localStorage with `window.localStorage.getItem`, and convert it to a JS object with `JSON.parse`.
 - Create a new store using our newly-made JS object

Keep in mind that for BentoTime, we split up these two steps into our storeCreator and our main renderer.js file!
