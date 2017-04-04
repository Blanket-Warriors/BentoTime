import * as services from "store/services/services.js";
import * as types from "../actionTypes.js";


export function addBookmark(bookId) {
	return {
		type: types.ADD_BOOKMARK,
		payload: { bookId }
	}
}

export function removeBookmark(bookId) {
	return {
		type: types.REMOVE_BOOKMARK,
		payload: { bookId }
	}
}
