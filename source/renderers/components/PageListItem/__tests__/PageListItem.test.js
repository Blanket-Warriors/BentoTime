import React from "react";
import renderer from "react-test-renderer";
import PageListItem from "../PageListItem";

test("Should render a `div` with a class of `book-view`", function() {
  this.component = renderer.create(<PageListItem />);
  expect(this.component).toMatchSnapshot();
});
