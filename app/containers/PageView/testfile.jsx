import React from "react";
import { shallow } from "enzyme";
import PageView from "app/containers/PageView";

describe("Containers", function() {
  describe("PageView", function() {
    beforeEach(function() {
      this.component = shallow(<PageView />);
    });

    xit("Should render a `div`", function renderBookView() {
      expect(this.component.type()).to.equal("div");
    });

    it("Should render a PageList component, and pass it page data");
    it("Should render PageTurn components to move forward and backward");
    it("Should render ChapterSelect component to switch to any chapter");
    it("Should render PageSelect component to switch to any page");
  });
});
