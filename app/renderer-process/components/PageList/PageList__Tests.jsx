import React from "react";
import { shallow } from "enzyme";
import PageList from "./PageList";

describe("Components", function() {
  describe("PageList", function() {
    beforeEach(function() {
      this.pages = [
        { id: 0, image: "some-image-url-0" },
        { id: 1, image: "some-image-url-1" },
        { id: 2, image: "some-image-url-2" },
        { id: 3, image: "some-image-url-3" },
        { id: 4, image: "some-image-url-4" }
      ];

      this.component = shallow(<PageList pages={this.pages} />);
    });

    it("Should render an `ul` tag", function() {
      expect(this.component.type()).to.equal("ul");
      expect(this.component.hasClass("page-list")).to.be.true;
    });

    it("Should display all page data as Page List Items with the correct props", function() {
      const pageListItems = this.component.find("PageListItem");
      expect(pageListItems).to.have.length(5);
      pageListItems.forEach(pageListItem => {
        expect(pageListItem.prop("id")).to.exist;
        expect(pageListItem.prop("src")).to.exist;
      });
    });

    it("Should display `Loading...` if no pages are loaded", function() {
      this.component = shallow(<PageList />);
      expect(this.component.text()).to.equal("Loading...");
    });
  });
});
