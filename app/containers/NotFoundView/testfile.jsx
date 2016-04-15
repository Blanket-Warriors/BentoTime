import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import NotFoundView from "app/containers/NotFoundView";

describe("Containers", function() {
  describe("NotFoundView", function() {
    beforeEach(function() {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<NotFoundView />);
      this.component = shallowRenderer.getRenderOutput();
    });

    it("Should render a `h1`", function() {
      expect(this.component.type).to.equal("h1");
      expect(this.component.props.children).to.equal("NotFound View");
    });
  });
});
