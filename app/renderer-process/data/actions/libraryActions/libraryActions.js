import { reduce } from "lodash";
import { getLibrary$ } from "app/renderer-process/data/services/mangaEdenApi";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import moment from "moment";

function fetchLibraryRequest() {
  return {
    type: ActionTypes.FETCH_LIBRARY_REQUEST
  };
}

function fetchLibrarySuccess(library) {
  return {
    type: ActionTypes.FETCH_LIBRARY_SUCCESS,
    library: library,
    receivedAt: moment().unix()
  };
}

function fetchLibraryFailure(error) {
  return {
    type: ActionTypes.FETCH_LIBRARY_FAILURE,
    error: error
  };
}

export function fetchLibrary(libraryPage) {
  return dispatch => {
    dispatch(fetchLibraryRequest());
    return getLibrary$(libraryPage)
      .then(function(library) {
        return Promise.resolve(dispatch(fetchLibrarySuccess(library)));
      })
      .catch(function(error) {
        return Promise.reject(dispatch(fetchLibraryFailure(error)));
      });
  };
}
