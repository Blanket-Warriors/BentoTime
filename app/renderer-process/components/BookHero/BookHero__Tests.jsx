import React from "react";
import { shallow } from "enzyme";
import BookHero from "./BookHero";

describe("Containers", function() {
  describe("BookHero", function() {
    beforeEach(function() {
      this.book = {
        title: "The little engine that could",
        description: "A book about a train that tried so hard and finally succeeded"
      };

      this.component = shallow(<BookHero book={this.book} />);
    });

    it("Should render a `div` with a class of `book-hero`", function() {
      expect(this.component.is("div.book-hero")).to.be.true;
    });

    it("Should render the title of the book", function() {
      const title = this.component.find(".book-hero__title");
      expect(title).to.exist;
      expect(title.type()).to.equal("h1");
      expect(title.text()).to.equal(this.book.title);
    });

    it("Should render a back button", function() {
      const backButton = this.component.find(".book-hero__back");
      expect(backButton.is("Link")).to.be.true;
      expect(backButton.shallow().text()).to.equal("Back");
      expect(backButton.prop("to")).to.equal("/");
    });
  });
});
