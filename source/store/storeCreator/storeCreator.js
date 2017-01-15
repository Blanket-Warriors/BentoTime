import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";

import callApiMiddleware from "./middleware/callApiMiddleware/callApiMiddleware.js";
import localStorageMiddleware from "./middleware/localStorageMiddleware/localStorageMiddlware.js";
import reducers from "store/reducers/reducers.js";

function storeCreator(initialState = {}, options = {}) {
	const reduxRouterMiddleware = routerMiddleware(options.history);
	const middleware = [
		thunkMiddleware,
		reduxRouterMiddleware,
		callApiMiddleware,
		localStorageMiddleware
	];

	const store = createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(...middleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
}

export default storeCreator;
