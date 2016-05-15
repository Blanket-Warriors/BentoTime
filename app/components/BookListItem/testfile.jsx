import React from "react";
import { shallow } from "enzyme";
import BookListItem from "app/components/BookListItem";

describe("Components", function() {
  describe("BookListItem", function() {
    beforeEach(function() {
      this.book = {
        id: "flappy-monkey",
        title: "Flappy Monkey Banana Attack"
      };

      this.component = shallow(<BookListItem book={this.book} />);
    });

    it("Should render an `li` tag with a class of `book-list-item`", function renderLi() {
      expect(this.component.type()).to.equal("li");
      expect(this.component.hasClass("book-list-item"));
    });

    it("Should render a `Link` based on the passed in book", function renderLi() {
      const Link = this.component.find("Link");
      const to = `book/${this.book.id}`;

      expect(Link).to.exist;
      expect(Link.hasClass("book-list-item__link")).to.be.true;
      expect(Link.prop("to")).to.equal(to);
      expect(this.component.find("img")).to.exist;
    });
  });
});
