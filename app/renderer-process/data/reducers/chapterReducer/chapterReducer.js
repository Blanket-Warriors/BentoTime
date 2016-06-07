import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import Chapter from "app/renderer-process/data/models/Chapter";

const initialState = {};

export default function chapter(state = initialState, action) {
  const chapter = new Chapter(state);

  switch(action.type) {
    case ActionTypes.SET_CHAPTER_VIEWED:
      return chapter.merge({
        viewed: action.viewedState
      });

    case ActionTypes.FETCH_CHAPTER_REQUEST:
      return chapter.merge({
        isFetching: true
      });

    case ActionTypes.FETCH_CHAPTER_SUCCESS:
      return chapter.merge({
        id: action.chapter.id,
        isFetching: false,
        lastUpdated: action.receivedAt,
        pages: action.chapter.pages
      });

    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return chapter.merge({
        isFetching: false
      });

    default:
      return chapter;
  }
}
