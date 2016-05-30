import React from "react";
import { mount, shallow } from "enzyme";

describe("Containers", function() {
  describe("Layout", function() {
    beforeEach(function beforeEach() {
      this.mockActions = {
        fetchLibrary: sinon.stub().returns("todo: use library fixture here"),
        fetchBook: sinon.stub().returns("todo: use book fixture here"),
        fetchChapter: sinon.stub().returns("todo: use chapter fixture here")
      };

      this.mockProps = {
        library: { lastUpdated: "1275542373.0" },
        dispatch: sinon.stub().returns(Promise.resolve()),
        params: {},
        routing: {},
        user: {},
        children: <div className="layout__child" />
      };

      let layoutInjector = require("inject!./Layout");
      this.Layout = layoutInjector({ "app/data/actions": this.mockActions }).unconnected;
      this.component = mount(<this.Layout {...this.mockProps} />);
    });

    afterEach(function afterEach() {
      this.mockProps = null;
      this.component = null;
    });

    it("Should render a div with a `layout` class", function shouldRenderLayout() {
      const layout = this.component.find(".layout");
      expect(layout.type()).to.equal("div");
    });

    it("Should render children", function shouldRenderChildren() {
      const child = this.component.find(".layout__child");
      expect(child.type()).to.equal("div");
    });

    it("Should not fetch anything if nothing needs to be updated", function shouldNotUpdate(done) {
      const layout = this.component.find(".layout");
      expect(layout.type()).to.equal("div");

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
        expect(this.mockActions.fetchBook.callCount).to.equal(0);
        expect(this.mockActions.fetchChapter.callCount).to.equal(0);
        done();
      });
    });

    it("Should fetch Library if it needs to be updated", function shouldFetchLibrary(done) {
      this.mockProps.library.lastUpdated = undefined;
      this.component = mount(<this.Layout {...this.mockProps} />);

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.callCount).to.equal(1);
        expect(this.mockActions.fetchBook.callCount).to.equal(0);
        expect(this.mockActions.fetchChapter.callCount).to.equal(0);
        done();
      });
    });

    it("Should fetch any books that need to be updated", function shouldFetchBook(done) {
      this.mockProps.params.bookid = "some-book";
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book"
        }
      };
      this.component = mount(<this.Layout {...this.mockProps} />);

      const book = this.mockProps.library.books["some-book"];
      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
        expect(this.mockActions.fetchChapter.callCount).to.equal(0);
        expect(this.mockActions.fetchBook.callCount).to.equal(1);
        done();
      }, 0);
    });

    it("Should fetch any chapters that need to be updated", function shouldFetchChapter(done) {
      this.mockProps.params.bookid = "some-book";
      this.mockProps.params.chapterid = "some-chapter";
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: "12345",
          chapters: [{ id: "some-chapter" }]
        }
      };
      this.component = mount(<this.Layout {...this.mockProps} />);

      const book = this.mockProps.library.books["some-book"];
      const chapter = find(book.chapters, {id: "some-chapter"});
      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.callCount).to.equal(0);
        expect(this.mockActions.fetchBook.callCount).to.equal(0);
        expect(this.mockActions.fetchChapter.callCount).to.equal(1);
        done();
      }, 0);
    });
  });
});
