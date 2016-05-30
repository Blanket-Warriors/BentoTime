import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";

import Routes from "app/window/containers/Routes";
import storeCreator from "app/data/store";
import "app/window/stylesheets/style";

const previousState = window.localStorage.getItem("bentotime");
const initialState = previousState ? JSON.parse(previousState) : {};
const store = storeCreator(initialState, {
  history: hashHistory
});

store.subscribe(function() {
  const state = store.getState();
  window.localStorage.setItem("bentotime", JSON.stringify(state || {}));
});

const mountPoint = document.getElementById("mountPoint");

render(
  <Provider store={store}>
    <Router history={hashHistory}>{Routes}</Router>
  </Provider>,
  mountPoint
);
