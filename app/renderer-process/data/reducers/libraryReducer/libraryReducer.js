import { defaultsDeep, forEach } from "lodash";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import bookReducer from "app/renderer-process/data/reducers/bookReducer";

const initialState = {
  books: {},
  isFetching: false,
  lastUpdated: null,
  totalBooks: 0
};

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_LIBRARY_REQUEST:
      return defaultsDeep({}, state, {
        isFetching: true
      });

    case ActionTypes.FETCH_LIBRARY_SUCCESS:
      var books = {};
      forEach(state.books, function(book, bookid) {
        books[bookid] = defaultsDeep({}, state.books[bookid], action.library.books[bookid]);
      });

      return defaultsDeep({}, state, {
        books: books,
        isFetching: false,
        lastUpdated: action.receivedAt,
        totalBooks: action.library.totalBooks
      });

    case ActionTypes.FETCH_LIBRARY_FAILURE:
      return defaultsDeep({}, state, {
        isFetching: false
      });

    case ActionTypes.SET_BOOKMARK:
    case ActionTypes.FETCH_BOOK_REQUEST:
    case ActionTypes.FETCH_BOOK_SUCCESS:
    case ActionTypes.FETCH_BOOK_FAILURE:
    case ActionTypes.SET_CHAPTER_VIEWED:
    case ActionTypes.FETCH_CHAPTER_REQUEST:
    case ActionTypes.FETCH_CHAPTER_SUCCESS:
    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return defaultsDeep({}, state, {
        books: defaultsDeep({}, state.books, {
          [action.book.id]: bookReducer(state.books[action.book.id], action)
        })
      });

    default:
      return state;
  }
}
