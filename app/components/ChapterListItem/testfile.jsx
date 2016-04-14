import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import ChapterListItem from "app/components/ChapterListItem";

describe("Components", function() {
  describe("ChapterListItem", function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
      this.book = {
        id: "funky-monkey"
      };
      this.chapter = {
        id: "funky-monkey-1",
        title: "1",
        number: 1
      };
    });

    it("Should render an `li` tag", function renderLi() {
      this.shallowRenderer.render(<ChapterListItem chapter={this.chapter} book={this.book} />);
      const component = this.shallowRenderer.getRenderOutput();
      expect(component.type).to.equal("li");
    });
  });
});
