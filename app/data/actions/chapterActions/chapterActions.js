import { getChapter$ } from "app/data/services/mangaEdenApi";
import * as ActionTypes from "app/data/actions/ActionTypes";

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
    receivedAt: Date.now()
  };
}

function fetchChapterFailure(error) {
  return {
    type: ActionTypes.FETCH_CHAPTER_FAILURE,
    error: error,
    receivedAt: Date.now()
  };
}

export function fetchChapter(book, chapter) {
  return dispatch => {
    dispatch(fetchChapterRequest(book, chapter));
    return getChapter$(chapter.id)
      .map(function(chapter) {
        return dispatch(fetchChapterSuccess(book, chapter));
      })
      .catch(function(error) {
        return dispatch(fetchChapterFailure(error));
      });
  };
}
