import { debounce } from "lodash";

const debouncedSaveState = debounce(function saveState(store, next, action) {
  if(action.type.match(/SUCCESS|SET/)) {
    let result = next(action);
    if(process.env["NODE_ENV"] === "development") { console.log("saving state!"); }
    const state = store.getState();
    window.localStorage.setItem("__zuck__", JSON.stringify(state || {}));
    return result;
  }
});

const localStorageMiddleware = store => next => action => {
  debouncedSaveState(store, next, action);
  return next(action);
};

export default localStorageMiddleware;
