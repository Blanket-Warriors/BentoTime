import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

import localStorageMiddleware from "./middleware/localStorageMiddleware";
import reducers from "renderer/data/reducers";

export default function storeCreator(initialState = {}, options = {}) {
  const middleware = [];
  middleware.push(thunkMiddleware);

  const reduxRouterMiddleware = routerMiddleware(options.history);
  middleware.push(reduxRouterMiddleware);
  middleware.push(localStorageMiddleware);

  if(process.env["NODE_ENV"] === "development") {
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
  }

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware.apply(null, middleware)
  );

  return store;
}
