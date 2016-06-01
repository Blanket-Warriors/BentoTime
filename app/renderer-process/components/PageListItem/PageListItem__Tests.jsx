import React from "react";
import { shallow } from "enzyme";
import PageListItem from "./PageListItem";

describe("Components", function() {
  describe("PageListItem", function() {
    beforeEach(function() {
      this.props = {
        id: 5,
        src: "some-image-url"
      };

      this.component = shallow(<PageListItem src={this.props.src} id={this.props.id} />);
    });

    it("Should render an `li` tag with a className of `page-list-item`", function renderLi() {
      expect(this.component.type()).to.equal("li");
      expect(this.component.hasClass("page-list-item"));
    });

    it("Should render an `Img` based on the id and src props", function renderLi() {
      const Img = this.component.find("Img");
      expect(Img).to.exist;
      expect(Img.hasClass("page-list-item__image")).to.be.true;
      expect(Img.prop("src")).to.equal(this.props.src);
      expect(Img.prop("alt")).to.equal(`page-${this.props.id}`);
    });
  });
});
