import * as ActionTypes from "renderer/data/actions/ActionTypes";
import Chapter from "renderer/data/models/Chapter";

const initialState = new Chapter();

export default function chapter(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.SET_CHAPTER_VIEWED:
      return state.merge({
        viewed: action.viewedState
      });

    case ActionTypes.FETCH_CHAPTER_REQUEST:
      return state.merge({
        isFetching: true
      });

    case ActionTypes.FETCH_CHAPTER_SUCCESS:
      return state.merge({
        id: action.chapter.id,
        isFetching: false,
        lastUpdated: action.receivedAt,
        pages: action.chapter.pages
      });

    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return state.merge({
        isFetching: false
      });

    default:
      return state;
  }
}
