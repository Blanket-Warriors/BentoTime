import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";

import { callApiMiddleware, createLocalStorageMiddleware } from "zuck";
import reducers from "store/reducers/reducers.js";

function storeCreator(initialState = {}, options = {}) {
	const reduxRouterMiddleware = routerMiddleware(options.history);
	const middleware = [
		thunkMiddleware,
		reduxRouterMiddleware,
		callApiMiddleware,
		createLocalStorageMiddleware("__bentotime__")
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
