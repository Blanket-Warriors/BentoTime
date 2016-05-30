import React from "react";
import { Route } from "react-router";

import Layout from "app/window/containers/Layout";
import BookView from "app/window/containers/BookView";
import ChapterView from "app/window/containers/ChapterView";
import LibraryView from "app/window/containers/LibraryView";
import SettingsView from "app/window/containers/SettingsView";
import NotFoundView from "app/window/containers/NotFoundView";

const routes = (
  <Route component={Layout}>
    <Route path="/" component={LibraryView} />

    <Route path="/book/:bookid/chapter/:chapterid" component={ChapterView} />
    <Route path="/book/:bookid" component={BookView} />

    <Route path="settings" component={SettingsView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);

export default routes;
