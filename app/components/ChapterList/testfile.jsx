import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import ChapterList from "app/components/ChapterList";

describe("Components", function() {
  describe("ChapterList", function() {
    beforeEach(function() {
      this.node = document.createElement("div");
      this.shallowRenderer = TestUtils.createRenderer();
      this.book = {
        id: "flappy-monkey-attack",
        title: "Flappy Monkey Attack!!!",
        chapters: {
          "flappy-monkey": {
            id: "flappy-monkey",
            title: "Flappy Monkey Banana Attack",
            number: 1
          },
          "flappy-monkey-2": {
            id: "flappy-monkey-2",
            title: "Return of the Flappy Monkey",
            number: 2
          }
        }
      };
    });

    it("Should render an `ul` tag", function renderUl() {
      this.shallowRenderer.render( <ChapterList book={this.book} /> );
      const ChapterListInstance = this.shallowRenderer.getRenderOutput();
      expect(ChapterListInstance.type).to.equal("ul");
    });

    it("Should display all chapters", function renderChapters() {
      this.shallowRenderer.render( <ChapterList book={this.book} /> );
      const ChapterListInstance = this.shallowRenderer.getRenderOutput();
      expect(ChapterListInstance.props.children.length).to.equal(2);
    });
  });
});
