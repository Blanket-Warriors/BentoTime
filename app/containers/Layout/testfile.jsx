import React from "react";
import { find } from "lodash";
import TestUtils from "react/lib/ReactTestUtils";

describe("Containers", function() {
  describe("Layout", function() {
    beforeEach(function beforeEach() {
      this.mockActions = {
        fetchLibrary: sinon.stub().returns("todo: use library fixture here"),
        fetchBook: sinon.stub().returns("todo: use book fixture here"),
        fetchChapter: sinon.stub().returns("todo: use chapter fixture here")
      };

      let layoutInjector = require("inject!app/containers/Layout");
      this.Layout = layoutInjector({ "app/data/actions": this.mockActions }).unconnected;

      this.props = {
        library: { lastUpdated: "12345" },
        dispatch: sinon.stub().returns(Promise.resolve()),
        params: {},
        routing: {},
        user: {}
      };

      this.component = TestUtils.renderIntoDocument(
        <this.Layout {...this.props}>
          <div className="layout__child" />
        </this.Layout>
      );
    });

    afterEach(function afterEach() {
      this.props = null;
      this.component = null;
    });

    it("Should render a div with a `layout` class", function shouldRenderLayout() {
      let layoutInstance = TestUtils.findRenderedDOMComponentWithClass(this.component, "layout");
      expect(layoutInstance.children).to.exist;
    });

    it("Should render children", function shouldRenderChildren() {
      let child = TestUtils.findRenderedDOMComponentWithClass(this.component, "layout__child");
      expect(child.tagName).to.equal("DIV");
    });

    it("Should not fetch anything if nothing needs to be updated", function shouldNotUpdate() {
      expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
      expect(this.mockActions.fetchBook.callCount).to.equal(0);
      expect(this.mockActions.fetchChapter.callCount).to.equal(0);
    });

    it("Should fetch Library if it needs to be updated", function shouldFetchLibrary() {
      this.props.library.lastUpdated = undefined;

      this.component = TestUtils.renderIntoDocument(
        <this.Layout {...this.props}>
          <div className="layout__child" />
        </this.Layout>
      );

      expect(this.mockActions.fetchLibrary.callCount).to.equal(1);
      expect(this.mockActions.fetchBook.callCount).to.equal(0);
      expect(this.mockActions.fetchChapter.callCount).to.equal(0);
    });

    it("Should fetch any books that need to be updated", function shouldFetchBook(done) {
      this.props.params.bookid = "some-book";
      this.props.library.books = {
        "some-book": {
          id: "some-book"
        }
      };

      this.component = TestUtils.renderIntoDocument(
        <this.Layout {...this.props}>
          <div className="layout__child" />
        </this.Layout>
      );

      const book = this.props.library.books["some-book"];
      expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
      expect(this.mockActions.fetchChapter.callCount).to.equal(0);
      setTimeout(() => {
        expect(this.mockActions.fetchBook.callCount).to.equal(1);
        done();
      }, 0);
    });

    it("Should fetch any chapters that need to be updated", function shouldFetchChapter(done) {
      this.props.params.bookid = "some-book";
      this.props.params.chapterid = "some-chapter";
      this.props.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: "12345",
          chapters: [{ id: "some-chapter" }]
        }
      };

      this.component = TestUtils.renderIntoDocument(
        <this.Layout {...this.props}>
          <div className="layout__child" />
        </this.Layout>
      );

      const book = this.props.library.books["some-book"];
      const chapter = find(book.chapters, {id: "some-chapter"});
      expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
      expect(this.mockActions.fetchBook.callCount).to.equal(0);
      setTimeout(() => {
        expect(this.mockActions.fetchChapter.callCount).to.equal(1);
        done();
      }, 0);
    });
  });
});
