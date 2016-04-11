import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";

import Routes from "app/containers/Routes";
import storeCreator from "app/data/store";
import "app/stylesheets/style";

const store = storeCreator(browserHistory);
const mountPoint = document.getElementById("mountPoint");

render(
  <Provider store={store}>
    <Router history={browserHistory}>{Routes}</Router>
  </Provider>,
  mountPoint
);
