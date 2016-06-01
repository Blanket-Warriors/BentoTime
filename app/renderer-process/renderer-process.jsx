import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";

import Routes from "app/renderer-process/containers/Routes";
import storeCreator from "app/renderer-process/data/store";
import "app/renderer-process/stylesheets/style";

const previousState = window.localStorage.getItem("bentotime");
const initialState = previousState ? JSON.parse(previousState) : {};

const store = storeCreator(initialState, {
  history: hashHistory
});

const mountPoint = document.getElementById("mountPoint");

render(
  <Provider store={store}>
    <Router history={hashHistory}>{Routes}</Router>
  </Provider>,
  mountPoint
);
