import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'app/data/reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function storeCreator(browserHistory) {
  // Create our middleware plugins
  const loggerMiddleware = createLogger();
  const reduxRouterMiddleware = routerMiddleware(browserHistory);

  const store = createStore(
    reducers,
    applyMiddleware(
      reduxRouterMiddleware,
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return store;
}
