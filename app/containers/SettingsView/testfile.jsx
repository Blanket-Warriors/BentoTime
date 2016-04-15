import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import SettingsView from "app/containers/SettingsView";

describe("Containers", function() {
  describe("SettingsView", function() {
    beforeEach(function() {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<SettingsView />);
      this.component = shallowRenderer.getRenderOutput();
    });

    it("Should render a `h1`", function() {
      expect(this.component.type).to.equal("h1");
      expect(this.component.props.children).to.equal("Settings View");
    });
  });
});
