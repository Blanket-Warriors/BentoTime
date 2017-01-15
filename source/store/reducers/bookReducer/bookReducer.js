import * as types from "store/actions/actionTypes.js";
import { combineReducers } from "redux";

function allBooks(state = [], action) {
	switch (action.type) {
		case types.FETCH_LIBRARY_SUCCESS:
			return updateAllBookIds(state, action);

		case types.FETCH_BOOK_SUCCESS:
			return updateBookId(state, action);

		default:
			return state;
	}
}

function booksById(state = {}, action) {
	switch (action.type) {
		case types.FETCH_LIBRARY_SUCCESS:
			return updateAllBookEntries(state, action);

		case types.FETCH_BOOK_SUCCESS:
		case types.FETCH_CHAPTER_SUCCESS:
			return updateBookEntry(state, action);

		default:
			return state;
	}
}

export default combineReducers({
	allIds: allBooks,
	byId: booksById
});


// Updaters
// –––––––––––––
function updateAllBookIds(state, action) {
	const { books } = action.payload;
	return merge({}, state, books);
}

function updateBookEntry(state, action) {
	const { bookId, book } = action.payload;
	return assign({}, state, {
		[bookId]: merge({}, state[bookId], book)
	});
}

function updateBookIds(state, action) {
	const bookIds = map(action.payload.books, book => book.id);
	return union(state, bookIds).sort();
}

function updateBookId(state, action) {
	return union(state, [ action.payload.bookId ]);
}
