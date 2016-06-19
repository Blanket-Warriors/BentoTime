import React from "react";
import { shallow } from "enzyme";
import NotFoundView from "./NotFoundView";

describe("Containers", function() {
  describe("NotFoundView", function() {
    beforeEach(function() {
      this.component = shallow(<NotFoundView />);
    });

    it("Should render a `h1`", function() {
      expect(this.component.type()).to.equal("h3");
    });

    it("Should render the text `NotFound View`", function() {
      expect(this.component.text()).to.equal("Page Not Found");
    });
  });
});
