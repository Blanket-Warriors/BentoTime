import React from "react";
import { shallow } from "enzyme";
import BookList from "app/components/BookList";

describe("Components", function() {
  describe("BookList", function() {
    beforeEach(function() {
      this.books = {
        "flappy-monkey": {
          id: "flappy-monkey",
          title: "Flappy Monkey Banana Attack"
        },
        "flappy-monkey-2": {
          id: "flappy-monkey-2",
          title: "Return of the Flappy Monkey"
        }
      };

      this.component = shallow(<BookList books={this.books} />);
    });

    it("Should render an `ul` tag", function renderUl() {
      expect(this.component.type()).to.equal("ul");
      expect(this.component.hasClass("book-list")).to.be.true;
    });

    it("Should not any books if filter prop is empty", function emptyProp() {
      expect(this.component.find("BookListItem")).have.length(0);
    });

    it("Should display no books if filter prop is false", function falseProp() {
      this.component = shallow(<BookList books={this.books} filter={false} />);
      expect(this.component.find("BookListItem")).to.have.length(0);
    });

    it("Should display all books if filter prop is true", function trueProp() {
      this.component = shallow(<BookList books={this.books} filter={true} />);
      expect(this.component.find("BookListItem")).have.length(2);
    });

    it("Should filter titles by string", function filterBookListByString() {
      this.component = shallow(<BookList books={this.books} filter="Return of the" />);
      expect(this.component.find("BookListItem")).to.have.length(1);
    });

    it("Should filter at the beginning of the title if filter is less than 3 characters", function filterBookListByString() {
      this.component = shallow(<BookList books={this.books} filter="Fla" />);
      expect(this.component.find("BookListItem")).to.have.length(1);
    });

    it("Should not display all books if filter prop is the string true", function trueStringProp() {
      this.component = shallow(<BookList books={this.books} filter={"true"} />);
      expect(this.component.find("BookListItem")).to.have.length(0);
    });
  });
});
