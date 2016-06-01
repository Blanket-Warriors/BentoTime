import React from "react";
import { Route } from "react-router";

import Layout from "app/renderer-process/containers/Layout";
import BookView from "app/renderer-process/containers/BookView";
import ChapterView from "app/renderer-process/containers/ChapterView";
import LibraryView from "app/renderer-process/containers/LibraryView";
import SettingsView from "app/renderer-process/containers/SettingsView";
import NotFoundView from "app/renderer-process/containers/NotFoundView";

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
