import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ipcRenderer } from "electron";
import { Router, hashHistory } from "react-router";

import Routes from "app/window/containers/Routes";
import storeCreator from "app/data/store";
import "app/window/stylesheets/style";

const initialState = {};
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
