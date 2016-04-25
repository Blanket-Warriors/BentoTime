import React from "react";
import { shallow } from "enzyme";
import SettingsView from "app/containers/SettingsView";

describe("Containers", function() {
  describe("SettingsView", function() {
    beforeEach(function() {
      this.component = shallow(<SettingsView />);
    });

    it("Should render a `h1`", function() {
      expect(this.component.type()).to.equal("h1");
    });

    it("Should render the correct content", function() {
      expect(this.component.text()).to.equal("Settings View");
    });
  });
});
