import React from "react";
import moment from "moment";
import { mount, shallow } from "enzyme";
import { merge } from "lodash";

describe("Containers", function() {
  describe("Layout", function() {
    beforeEach(function beforeEach() {
      this.mockActions = {
        fetchLibrary: sinon.stub().returns("todo: use library fixture here"),
        fetchBook: sinon.stub().returns("todo: use book fixture here"),
        fetchChapter: sinon.stub().returns("todo: use chapter fixture here")
      };

      this.mockProps = {
        library: { lastUpdated: moment() },
        location: { pathname: "/" },
        dispatch: sinon.stub().returns(Promise.resolve()),
        params: {},
        routing: {},
        user: {},
        children: <div className="layout__child" />
      };

      var layoutInjector = require("inject!./Layout");
      this.Layout = layoutInjector({ "renderer/data/actions": this.mockActions }).unconnected;
      this.component = mount(<this.Layout {...this.mockProps} />);
    });

    afterEach(function afterEach() {
      this.mockActions = null;
      this.mockProps = null;
      this.component = null;
    });

    it("Should render a div with a `layout` class", function() {
      const layout = this.component.find(".layout");
      expect(layout.type()).to.equal("div");
    });

    it("Should render children", function() {
      const child = this.component.find(".layout__child");
      expect(child.type()).to.equal("div");
    });

    // Updates need to be checked after our debounce runs.
    it("Should not fetch anything if nothing needs to be updated", function(done) {
      const layout = this.component.find(".layout");
      expect(layout.type()).to.equal("div");
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: undefined
        }
      };

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.called).to.be.false;
        expect(this.mockActions.fetchBook.called).to.be.false;
        expect(this.mockActions.fetchChapter.called).to.be.false;
        done();
      }, 1000);
    });

    it("Should fetch Library if it needs to be updated", function(done) {
      this.mockProps.library = { lastUpdated: undefined };
      this.component = mount(<this.Layout {...this.mockProps} />);

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.callCount).to.equal(1);
        expect(this.mockActions.fetchBook.called).to.be.false;
        expect(this.mockActions.fetchChapter.called).to.be.false;
        done();
      }, 1000);
    });

    it("Should fetch any books that need to be updated", function(done) {
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: undefined
        }
      };
      this.mockProps.params = { bookid: "some-book" };
      this.component = mount(<this.Layout {...this.mockProps} />);

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.called).to.be.false;
        expect(this.mockActions.fetchChapter.called).to.be.false;
        expect(this.mockActions.fetchBook.callCount).to.equal(1);
        done();
      }, 1000);
    });

    it("Should fetch any chapters that need to be updated", function(done) {
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: moment().unix(),
          chapters: [{
            id: "some-chapter" ,
            lastUpdated: undefined
          }]
        }
      };
      this.mockProps.params = {
        bookid: "some-book",
        chapterid: "some-chapter"
      };
      this.component = mount(<this.Layout {...this.mockProps} />);

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.called).to.be.false;
        expect(this.mockActions.fetchBook.called).to.be.false;
        expect(this.mockActions.fetchChapter.callCount).to.equal(1);
        done();
      }, 1000);
    });

    it("Should fetch all bookmarks when fetching library (regardless of params)", function(done) {
      this.mockProps.library.books = {
        "some-book": {
          id: "some-book",
          lastUpdated: undefined,
          bookmarked: true
        }
      };

      setTimeout(() => {
        expect(this.mockActions.fetchLibrary.called).to.be.false;
        expect(this.mockActions.fetchChapter.called).to.be.false;
        expect(this.mockActions.fetchBook.callCount).to.equal(1);
        done();
      }, 1000);
    });
  });
});
