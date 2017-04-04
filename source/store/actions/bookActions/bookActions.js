import * as services from "store/services/services.js";
import * as types from "../actionTypes.js";

export function fetchBook(bookId) {
	return {
		types: [
			types.FETCH_BOOK_REQUEST,
			types.FETCH_BOOK_SUCCESS,
			types.FETCH_BOOK_FAILURE
		],
		callApi() { return services.fetchBook(bookId); },
		payload: { bookId }
	}
}

export function updateBook(bookId, book) {
	return {
		type: types.UPDATE_BOOK,
		payload: { bookId, book }
	};
}
