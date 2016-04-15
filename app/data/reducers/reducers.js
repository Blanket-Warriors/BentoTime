import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux";
import libraryReducer from "app/data/reducers/libraryReducer";

export default combineReducers({
  routing: routeReducer,
  library: libraryReducer
});
