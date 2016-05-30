import React from "react";
import { shallow } from "enzyme";
import Img from "./Img";

describe("Components", function() {
  describe("Img", function() {
    beforeEach(function() {
      this.component = null;
    });

    it("Should render an `img` tag with appropriate props", function renderImg() {
      this.component = shallow(
        <Img
          src="assets/images/phant.svg"
          alt="Phant"
          fallback="assets/images/phant.png"
        />
      );
      expect(this.component.type()).to.equal("img");
      expect(this.component.prop("src")).to.equal("assets/images/phant.svg");
      expect(this.component.prop("alt")).to.equal("Phant");
      expect(this.component.prop("fallback")).to.equal("assets/images/phant.png");
    });

    it("Should make the src match the fallback if onError is fired", function matchImgSrc() {
      this.component = shallow(
        <Img
          src="moop"
          alt="Phant"
          fallback="assets/images/phant.png"
        />
      );
      expect(this.component.state().src).to.equal("moop");
      this.component.find("img").simulate("error");
      expect(this.component.state().src).to.equal("assets/images/phant.png");
    });
  });
});
