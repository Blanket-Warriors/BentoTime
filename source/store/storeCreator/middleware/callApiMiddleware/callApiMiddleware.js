export default function callApiMiddleware({ dispatch, getState }) {
	return next => action => {
		const {
			types,
			callAPI,
			payload = {},
			shouldCallAPI = () => true
		} = action;

		// Normal action: pass it on
		if (!types) { return next(action); }

		if (
			!Array.isArray(types) ||
			types.length !== 3 ||
			!types.every(type => typeof type === "string")
		) {
			throw new Error("Expected an array fo three string types.");
		}

		if (typeof callAPI !== "function") {
			throw new Error("Expected callAPI to be a function");
		}

		if (!shouldCallAPI(getState())) { return; }

		const [ requestType, successType, failureType ] = types;

		dispatch({ payload, type: requestType });

		return call API().then(
			response => dispatch({
				payload: Object.assign({}, payload, response),
				type: successType
			}),
			error => dispatch({
				payload: Object.assign({}, payload, { error }),
				type: failureType
			})
		);
	}
}
