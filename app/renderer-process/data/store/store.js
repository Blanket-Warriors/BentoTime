import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import reducers from "app/renderer-process/data/reducers";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const localStorageMiddleware = store => next => action => {
  if(action.type.match(/SUCCESS/)) {
    if(process.env["NODE_ENV"] === "development") { console.log("saving state!"); }
    const state = store.getState();
    window.localStorage.setItem("bentotime", JSON.stringify(state || {}));
  }
  return next(action);
};

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
