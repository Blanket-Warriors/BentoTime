import React from "react";
import { shallow } from "enzyme";
import BookView from "./BookView";

describe("Containers", function() {
  describe("BookView", function() {
    beforeEach(function() {
      this.book = {
        title: "The little engine that could",
        description: "A book about a train that tried so hard and finally succeeded"
      };

      this.component = shallow(<BookView book={this.book} />);
    });

    it("Should render a `div` with a class of `book-view`", function() {
      expect(this.component.is("div.book-view")).to.be.true;
    });

    it("Should render a BookHero component", function() {
      const bookHero = this.component.find("BookHero");
      expect(bookHero.hasClass("book-view__hero")).to.be.true;
      expect(bookHero.prop("book")).to.equal(this.book);
    });

    it("Should render a BookInfo component", function() {
      const bookInfo = this.component.find("BookInfo");
      expect(bookInfo.hasClass("book-view__info")).to.be.true;
      expect(bookInfo.prop("book")).to.equal(this.book);
    });

    it("Should render a Loading component if no book is passed in as a prop", function() {
      this.component = shallow(<BookView />);
      expect(this.component.text()).to.equal("loading...");
    });
  });
});
