import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";

import Routes from "renderer/containers/Routes";
import storeCreator from "renderer/data/store";
import "renderer/stylesheets/style";

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
