import { getBook$ } from "app/data/services/mangaEdenApi";
import * as ActionTypes from "app/data/actions/ActionTypes";
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
    receivedAt: moment()
  };
}

function fetchBookFailure(error) {
  return {
    type: ActionTypes.FETCH_BOOK_FAILURE,
    error: error,
    receivedAt: moment()
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
        dispatch(fetchBookFailure(error));
      });
  };
}
