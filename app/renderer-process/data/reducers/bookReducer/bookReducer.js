import { merge, find } from "lodash";
import * as ActionTypes from "renderer/data/actions/ActionTypes";
import chapterReducer from "renderer/data/reducers/chapterReducer";
import Book from "renderer/data/models/Book";

const initialState = new Book();

export default function bookReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_BOOKMARK:
      return state.merge({
        bookmarked: action.bookmarkState
      });

    case ActionTypes.FETCH_BOOK_REQUEST:
      return state.merge({
        isFetching: true
      });

    case ActionTypes.FETCH_BOOK_SUCCESS:
      return state.merge(merge({}, action.book, {
        isFetching: false,
        lastUpdated: action.receivedAt
      }));

    case ActionTypes.FETCH_BOOK_FAILURE:
      return state.merge({
        isFetching: false
      });

    case ActionTypes.SET_CHAPTER_VIEWED:
    case ActionTypes.FETCH_CHAPTER_REQUEST:
    case ActionTypes.FETCH_CHAPTER_SUCCESS:
    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return state.merge({
        chapters: state.chapters.map(function(chapter) {
          if(chapter && action.chapter && chapter.id === action.chapter.id) {
            return chapterReducer(chapter, action);
          }
          return chapter;
        })
      });

    default:
      return state;
  }
}
