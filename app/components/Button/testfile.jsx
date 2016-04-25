import React from "react";
import { shallow } from "enzyme";
import Button from "app/components/Button";

describe("Components", function() {
  describe("Button", function() {
    beforeEach(function() {
      this.component = shallow(<Button awesome="hello" />);
    });

    it("Should render a `button` tag", function renderButton() {
      expect(this.component.type()).to.equal("button");
    });

    it("Should pass on props", function () {
      expect(this.component.prop("awesome")).to.equal("hello");
    });
  });
});
