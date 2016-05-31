import { getChapter$ } from "app/data/services/mangaEdenApi";
import * as ActionTypes from "app/data/actions/ActionTypes";
import moment from "moment";

function fetchChapterRequest(book, chapter) {
  return {
    type: ActionTypes.FETCH_CHAPTER_REQUEST,
    book: book,
    chapter: chapter
  };
}

function fetchChapterSuccess(book, chapter) {
  return {
    type: ActionTypes.FETCH_CHAPTER_SUCCESS,
    chapter: chapter,
    book: book,
    receivedAt: moment()
  };
}

function fetchChapterFailure(error) {
  return {
    type: ActionTypes.FETCH_CHAPTER_FAILURE,
    error: error,
    receivedAt: moment()
  };
}

export function fetchChapter(book, chapter) {
  return dispatch => {
    dispatch(fetchChapterRequest(book, chapter));
    return getChapter$(chapter.id)
      .then(function(chapter) {
        return Promise.resolve(dispatch(fetchChapterSuccess(book, chapter)));
      })
      .catch(function(error) {
        return Promise.reject(dispatch(fetchChapterFailure(error)));
      });
  };
}
