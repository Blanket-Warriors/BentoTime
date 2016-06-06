const promiseMiddleware = store => next => action => {
  if (typeof action.then !== "function") {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

export default promiseMiddleware;
