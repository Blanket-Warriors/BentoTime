import * as ActionTypes from "renderer/data/actions/ActionTypes";

export function setReadMode(readMode) {
  return {
    type: ActionTypes.SET_READ_MODE,
    readMode: readMode
  };
}
