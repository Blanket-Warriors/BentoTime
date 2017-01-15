import React from "react";
import { shallow } from "enzyme";
import BookInfo from "./BookInfo";

describe("Containers", function() {
  describe("BookInfo", function() {
    beforeEach(function() {
      this.book = {
        title: "The little engine that could",
        description: "A book about a train that tried so hard and finally succeeded"
      };

      this.component = shallow(<BookInfo book={this.book} />);
    });

    it("Should render a `div` with a class of `book-info`", function() {
      expect(this.component.is("div.book-info")).to.be.true;
    });

    it("Should render a book description", function() {
      const description = this.component.find(".book-info__description");
      expect(description.type()).to.equal("p");
      expect(description.text()).to.equal(this.book.description);
    });

    it("Should render a `ChapterList` component", function() {
      const chapterList = this.component.find("ChapterList");
      expect(chapterList.prop("book")).to.equal(this.book);
    });
  });
});
