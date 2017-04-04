import * as services from "store/services/services.js";
import * as types from "../actionTypes.js";

export function fetchLibrary(libraryId) {
	return {
		types: [
			types.FETCH_LIBRARY_REQUEST,
			types.FETCH_LIBRARY_SUCCESS,
			types.FETCH_LIBRARY_FAILURE
		],
		callApi() { return services.fetchLibrary(libraryId); },
		payload: { libraryId }
	}
}

export function updateLibrary(library) {
	return {
		type: types.UPDATE_LIBRARY,
		payload: { library }
	};
}
