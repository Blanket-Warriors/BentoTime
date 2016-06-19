import { getBook$ } from "renderer/data/services/mangaEdenApi";
import * as ActionTypes from "renderer/data/actions/ActionTypes";
import moment from "moment";

function fetchBookRequest(book) {
  return {
    type: ActionTypes.FETCH_BOOK_REQUEST,
    fetching: true,
    book: book
  };
}

function fetchBookSuccess(book) {
  return {
    type: ActionTypes.FETCH_BOOK_SUCCESS,
    book: book,
    receivedAt: parseInt(moment().format("x"))
  };
}

function fetchBookFailure(book, error) {
  return {
    book: book,
    type: ActionTypes.FETCH_BOOK_FAILURE,
    error: error
  };
}

export function setBookmark(book, bookmarkState) {
  return {
    type: ActionTypes.SET_BOOKMARK,
    book: book,
    bookmarkState: bookmarkState
  };
}

export function fetchBook(book) {
  return dispatch => {
    dispatch(fetchBookRequest(book));
    return getBook$(book.id)
      .then(function(book) {
        return Promise.resolve(dispatch(fetchBookSuccess(book)));
      })
      .catch(function(error) {
        dispatch(fetchBookFailure(book, error));
      });
  };
}
