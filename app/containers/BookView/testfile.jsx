import React from "react";
import { shallow } from "enzyme";
import BookView from "app/containers/BookView";

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

    it("Should render the title of the book", function() {
      const title = this.component.find(".book-view__title");
      expect(title).to.exist;
      expect(title.type()).to.equal("h1");
      expect(title.text()).to.equal(this.book.title);
    });

    it("Should render a book description", function() {
      const description = this.component.find(".book-view__description");
      expect(description.type()).to.equal("p");
      expect(description.text()).to.equal(this.book.description);
    });

    it("Should render a back button", function() {
      const backButton = this.component.find(".book-view__back");
      expect(backButton.is("Link")).to.be.true;
      expect(backButton.shallow().text()).to.equal("Back");
      expect(backButton.prop("to")).to.equal("/");
    });

    it("Should render a `ChapterList` component", function() {
      const chapterList = this.component.find("ChapterList");
      expect(chapterList.prop("book")).to.equal(this.book);
    });

    it("Should render a Loading component if no book is passed in as a prop", function() {
      this.component = shallow(<BookView />);
      expect(this.component.text()).to.equal("loading...");
    });
  });
});
