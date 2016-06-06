const localStorageMiddleware = store => next => action => {
  if(action.type.match(/SUCCESS|SET/)) {
    let result = next(action);
    if(process.env["NODE_ENV"] === "development") { console.log("saving state!"); }
    const state = store.getState();
    window.localStorage.setItem("bentotime", JSON.stringify(state || {}));
    return result;
  }
  return next(action);
};

export default localStorageMiddleware;
