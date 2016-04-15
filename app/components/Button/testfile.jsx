import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import Button from "app/components/Button";

describe("Components", function() {
  describe("Button", function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
    });

    it("Should render a `button` tag with appropriate props", function renderButton() {
      this.shallowRenderer.render(
        <Button awesome="hello" />
       );
      const ButtonInstance = this.shallowRenderer.getRenderOutput();
      expect(ButtonInstance.type).to.equal("button");
      expect(ButtonInstance.props.awesome).to.equal("hello");
    });
  });
});
