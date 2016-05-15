import React from "react";
import { shallow } from "enzyme";
import SearchBar from "app/components/SearchBar";

describe("Components", function() {
  describe("SearchBar", function() {
    beforeEach(function() {
      this.props = {
        onChange: function(){}
      };
      this.component = shallow(<SearchBar {...this.props} />);
    });

    it("Should render an `input` with the correct properties", function() {
      const input = this.component.find(".search-bar__input");
      expect(input.type()).to.equal("input");
      expect(input.prop("type")).to.equal("search");
      expect(input.prop("placeholder")).to.equal("Search...");
      expect(input.prop("onChange")).to.be.a.function;
    });
  });
});
