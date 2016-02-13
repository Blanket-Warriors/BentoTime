import { merge } from 'lodash';
import * as ActionTypes from 'app/data/actions/ActionTypes';

const initialState = {
  id: undefined,
  isFetching: false,
  lastUpdated: undefined,
  pages: []
};

export default function chapter(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.FETCH_CHAPTER_REQUEST:
      return merge({}, state, {
        isFetching: true
      });

    case ActionTypes.FETCH_CHAPTER_SUCCESS:
      return merge({}, state, {
        id: action.chapter.id,
        isFetching: false,
        lastUpdated: action.receivedAt,
        pages: action.chapter.pages
      });

    case ActionTypes.FETCH_CHAPTER_FAILURE:
      return merge({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}