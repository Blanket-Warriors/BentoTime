import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import BookListItem from "app/components/BookListItem";

describe("Components", function() {
  describe("BookListItem", function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
      this.book = null;
    });

    it("Should render an `li` tag with appropriate props", function renderBookListItem() {
      this.book = {
        id: "flappy-monkey",
        title: "Flappy Monkey Banana Attack"
      };

      this.shallowRenderer.render(<BookListItem key="key1" book={this.book} />);
      const BookListItemInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListItemInstance.type).to.equal("li");
    });
  });
});
