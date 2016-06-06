import { getChapter$ } from "app/renderer-process/data/services/mangaEdenApi";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
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
    receivedAt: moment.unix()
  };
}

function fetchChapterFailure(error) {
  return {
    type: ActionTypes.FETCH_CHAPTER_FAILURE,
    error: error,
    receivedAt: moment.unix()
  };
}

export function setChapterViewed(book, chapter, viewedState) {
  return {
    type: ActionTypes.SET_CHAPTER_VIEWED,
    book: book,
    chapter: chapter,
    viewedState: viewedState
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
