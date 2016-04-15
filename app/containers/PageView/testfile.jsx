import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import PageView from "app/containers/PageView";

describe("Containers", function() {
  describe("PageView", function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
    });

    xit("Should render a `div`", function renderBookView() {
      this.shallowRenderer.render(<PageView />);
      const PageViewinstance = this.shallowRenderer.getRenderOutput();
      expect(PageViewinstance.type).to.equal("div");
    });

    it("Should render a PageList component, and pass it page data");
    it("Should render PageTurn components to move forward and backward");
    it("Should render ChapterSelect component to switch to any chapter");
    it("Should render PageSelect component to switch to any page");
  });
});
