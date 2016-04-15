import React from "react";
import TestUtils from "react/lib/ReactTestUtils";
import BookList from "app/components/BookList";

describe("Components", function() {
  describe("BookList", function() {
    beforeEach(function() {
      this.node = document.createElement("div");
      this.shallowRenderer = TestUtils.createRenderer();
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
    });

    it("Should render an `ul` tag", function renderUl() {
      this.shallowRenderer.render( <BookList books={this.books} /> );
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.type).to.equal("ul");
    });

    it("Should not any books if filter prop is empty", function emptyProp() {
      this.shallowRenderer.render( <BookList books={this.books} /> );
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(0);
    });

    it("Should display no books if filter prop is false", function falseProp() {
      this.shallowRenderer.render( <BookList books={this.books} filter={false} /> );
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(0);
    });

    it("Should display all books if filter prop is true", function trueProp() {
      this.shallowRenderer.render( <BookList books={this.books} filter={true} /> );
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(2);
    });

    it("Should filter titles by string", function filterBookListByString() {
      this.shallowRenderer.render( <BookList books={this.books} filter="Return of the" />) ;
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(1);
    });

    it("Should filter at the beginning of the title if filter is less than 3 characters", function filterBookListByString() {
      this.shallowRenderer.render( <BookList books={this.books} filter="Fla" />) ;
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(1);
    });

    it("Should not display all books if filter prop is the string true", function trueStringProp() {
      this.shallowRenderer.render( <BookList books={this.books} filter={"true"} /> );
      const BookListInstance = this.shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.not.equal(2);
    });
  });
});
