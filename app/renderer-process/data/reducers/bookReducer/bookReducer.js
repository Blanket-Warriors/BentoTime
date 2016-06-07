import { merge, find } from "lodash";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import chapterReducer from "app/renderer-process/data/reducers/chapterReducer";
import Book from "app/renderer-process/data/models/Book";

const initialState = new Book();

export default function bookReducer(state = initialState, action) {
  const book = new Book(state);

  switch(action.type) {
    case ActionTypes.SET_BOOKMARK:
      return book.merge({
        bookmarked: action.bookmarkState
      });

    case ActionTypes.FETCH_BOOK_REQUEST:
      return book.merge({
        isFetching: true
      });

    case ActionTypes.FETCH_BOOK_SUCCESS:
      return book.merge(merge({}, action.book, {
        isFetching: false,
        lastUpdated: action.receivedAt
      }));

    case ActionTypes.FETCH_BOOK_FAILURE:
      return book.merge({
        isFetching: false
      });

    case ActionTypes.SET_CHAPTER_VIEWED:
    case ActionTypes.FETCH_CHAPTER_REQUEST:
    case ActionTypes.FETCH_CHAPTER_SUCCESS:
    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return book.merge({
        chapters: book.chapters.map(function(chapter) {
          if(chapter && action.chapter && chapter.id === action.chapter.id) {
            return chapterReducer(chapter, action);
          }
          return chapter;
        })
      });

    default:
      return book;
  }
}
