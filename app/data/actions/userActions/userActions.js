import * as ActionTypes from "app/data/actions/ActionTypes";

export function setReadMode(readMode) {
  return {
    type: ActionTypes.SET_READ_MODE,
    readMode: readMode
  };
}
