import React from "react";
import { Route } from "react-router";

import Layout from "renderer/containers/Layout";
import BookView from "renderer/containers/BookView";
import ChapterView from "renderer/containers/ChapterView";
import LibraryView from "renderer/containers/LibraryView";
import NotFoundView from "renderer/containers/NotFoundView";

const routes = (
  <Route component={Layout}>
    <Route path="/" component={LibraryView} />

    <Route path="/book/:bookid/chapter/:chapterid" component={ChapterView} />
    <Route path="/book/:bookid" component={BookView} />

    <Route path="*" component={NotFoundView} />
  </Route>
);

export default routes;
