import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import reducers from "app/data/reducers";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

export default function storeCreator(initialState = {}, options = {}) {
  const middleware = [];
  middleware.push(thunkMiddleware);

  const reduxRouterMiddleware = routerMiddleware(options.history);
  middleware.push(reduxRouterMiddleware);

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
