import { merge, forEach } from "lodash";
import * as ActionTypes from "renderer/data/actions/ActionTypes";
import bookReducer from "renderer/data/reducers/bookReducer";
import Library from "renderer/data/models/Library";

const initialState = new Library();

export default function libraryReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_LIBRARY_REQUEST:
      return merge({}, state, {
        isFetching: true
      });

    case ActionTypes.FETCH_LIBRARY_SUCCESS:
      var currentBooks = state.books;
      var updatedBooks = action.library.books;
      var nextBooks = {};
      forEach(updatedBooks, function(book, index) {
        const prevBook = currentBooks[index];
        if(prevBook) {
          nextBooks[index] = prevBook.merge(updatedBooks[index]);
        } else {
          nextBooks[index] = book;
        }
      });

      return merge({}, state, {
        books: nextBooks,
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
