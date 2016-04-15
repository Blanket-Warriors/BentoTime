import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import BookListItem from "app/components/BookListItem";

describe("Components", function() {
  describe("BookListItem", function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
      this.book = {
        id: "flappy-monkey",
        title: "Flappy Monkey Banana Attack"
      };
    });

    it("Should render an `li` tag", function renderLi() {
      this.shallowRenderer.render(<BookListItem key="key1" book={this.book} />);
      const component = this.shallowRenderer.getRenderOutput();
      expect(component.type).to.equal("li");
    });
  });
});
