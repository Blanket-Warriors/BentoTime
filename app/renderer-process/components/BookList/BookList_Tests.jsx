import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import BookList from "./BookList";

describe("Components", function() {
  describe("BookList", function() {
    beforeEach(function() {
      this.books = {
        "flappy-monkey": {
          id: "flappy-monkey",
          title: "Flappy Monkey Banana Attack",
          lastChapterDate: moment().add(-5, "hours")
        },
        "flappy-monkey-2": {
          id: "flappy-monkey-2",
          title: "Return of the Flappy Monkey",
          lastChapterDate: moment()
        }
      };

      this.component = shallow(<BookList books={this.books} />);
    });

    it("Should render an `ul` tag", function() {
      expect(this.component.type()).to.equal("ul");
      expect(this.component.hasClass("book-list")).to.be.true;
    });

    it("Should not any books if filter prop is empty", function() {
      expect(this.component.find("BookListItem")).have.length(0);
    });

    it("Should display no books if filter prop is false", function() {
      this.component = shallow(<BookList books={this.books} searchFilter={false} />);
      expect(this.component.find("BookListItem")).to.have.length(0);
    });

    it("Should display all books if filter prop is true", function() {
      this.component = shallow(<BookList books={this.books} searchFilter={true} />);
      expect(this.component.find("BookListItem")).have.length(2);
    });

    it("Should filter titles by string", function() {
      this.component = shallow(<BookList books={this.books} searchFilter="Return of the" />);
      expect(this.component.find("BookListItem")).to.have.length(1);
    });

    it("Should filter at the beginning of the title if filter is less than 3 characters", function() {
      this.component = shallow(<BookList books={this.books} searchFilter="Fla" />);
      expect(this.component.find("BookListItem")).to.have.length(1);
    });

    it("Should not display all books if filter prop is the string true", function() {
      this.component = shallow(<BookList books={this.books} searchFilter={"true"} />);
      expect(this.component.find("BookListItem")).to.have.length(0);
    });

    it("Should sort with newest updates at the top", function() {
      this.component = shallow(<BookList books={this.books} searchFilter={true} />);
      const bookList = this.component.find(".book-list");
      const firstBook = bookList.childAt(0).prop("book");
      const secondBook = bookList.childAt(1).prop("book");
      expect(firstBook.id).to.equal("flappy-monkey-2");
      expect(secondBook.id).to.equal("flappy-monkey");
    });
  });
});
