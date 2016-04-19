import { reduce } from "lodash";
import { getLibrary$ } from "app/data/services/mangaEdenApi";
import * as ActionTypes from "app/data/actions/ActionTypes";

function fetchLibraryRequest() {
  return {
    type: ActionTypes.FETCH_LIBRARY_REQUEST
  };
}

function fetchLibrarySuccess(library) {
  return {
    type: ActionTypes.FETCH_LIBRARY_SUCCESS,
    library: library,
    receivedAt: Date.now()
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
