import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { AppContainer } from "react-hot-loader";

import Routes from "renderer/containers/Routes/Routes.jsx";
import createStore from "renderer/data/storeCreator/storeCreator.js";
import Library from "renderer/data/models/Library/Library.js";
import "renderer/stylesheets/style.scss";

renderApp();

if (module.hot) {
  module.hot.accept("./containers/Routes/Routes.jsx", renderApp);
}

function renderApp() {
  const previousState = window.localStorage.getItem("bentotime");
  const initialState = previousState ? JSON.parse(previousState) : {};

  initialState.library = new Library(initialState.library);
  const store = createStore(initialState, { history: hashHistory });
  const mountPoint = document.getElementById("mountPoint");

  const app = (
    <Provider store={store}>
      <Router history={hashHistory}>{Routes}</Router>
    </Provider>
  );

  render( <AppContainer>{app}</AppContainer>, mountPoint );
}
