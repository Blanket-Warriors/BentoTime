import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux";
import bookReducer from "renderer/data/reducers/bookReducer";
import chapterReducer from "renderer/data/reducers/chapterReducer";
import libraryReducer from "renderer/data/reducers/libraryReducer";

export default combineReducers({
  routing: routeReducer,
  library: libraryReducer
});
