import { merge, forEach } from "lodash";
import * as ActionTypes from "renderer/data/actions/ActionTypes";
import bookReducer from "renderer/data/reducers/bookReducer";
import Book from "renderer/data/models/Book";

const initialState = {
  books: {},
  isFetching: false,
  lastUpdated: null,
  totalBooks: 0
};

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_LIBRARY_REQUEST:
      return merge({}, state, {
        isFetching: true
      });

    case ActionTypes.FETCH_LIBRARY_SUCCESS:
      var previousBooks = state.books;
      var nextBooks = action.library.books;
      var books = {};
      forEach(nextBooks, function(book, index) {
        const prevBookObj = previousBooks[index];
        if(prevBookObj) {
          const book = new Book(prevBookObj);
          books[index] = book.merge(nextBooks[index]);
        } else {
          books[index] = nextBooks[index];
        }
      });

      return merge({}, state, {
        books: books,
        isFetching: false,
        lastUpdated: action.receivedAt,
        totalBooks: action.library.totalBooks
      });

    case ActionTypes.FETCH_LIBRARY_FAILURE:
      return merge({}, state, {
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
      return merge({}, state, {
        books: merge({}, state.books, {
          [action.book.id]: bookReducer(state.books[action.book.id], action)
        })
      });

    default:
      return state;
  }
}
