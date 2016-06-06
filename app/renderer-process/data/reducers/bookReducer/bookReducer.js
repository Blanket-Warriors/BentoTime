import { merge, defaultsDeep } from "lodash";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import chapterReducer from "app/renderer-process/data/reducers/chapterReducer";

const initialState = {
  alias: undefined,
  artist: undefined,
  author: undefined,
  categories: [],
  chapters: [],
  created: undefined,
  description: undefined,
  hits: undefined,
  id: undefined,
  image: undefined,
  isFetching: false,
  lastChapterDate: undefined,
  lastUpdated: undefined,
  status: undefined,
  title: undefined,
  bookmarked: undefined
};

export default function bookReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_BOOKMARK:
      return merge({}, state, {
        bookmarked: action.bookmarkState
      });

    case ActionTypes.FETCH_BOOK_REQUEST:
      return merge({}, state, {
        isFetching: true
      });

    case ActionTypes.FETCH_BOOK_SUCCESS:
      return merge({}, state, action.book, {
        isFetching: false,
        lastUpdated: action.receivedAt
      });

    case ActionTypes.FETCH_BOOK_FAILURE:
      return merge({}, state, {
        isFetching: false
      });

    case ActionTypes.SET_CHAPTER_VIEWED:
    case ActionTypes.FETCH_CHAPTER_REQUEST:
    case ActionTypes.FETCH_CHAPTER_SUCCESS:
    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return defaultsDeep({}, state, {
        chapters: state.chapters.map(function(chapter) {
          if(chapter.id === action.chapter.id) {
            return chapterReducer(state.chapters[chapter.id], action);
          }
          return chapter;
        })
      });

    default:
      return state;
  }
}
