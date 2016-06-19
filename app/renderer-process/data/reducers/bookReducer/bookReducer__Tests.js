import bookFixture from "test/fixtures/models/bookFixture";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";

import Book from "test/stubs/models/BookModel";

var bookReducer;

describe("Data", function() {
  describe("Reducers", function() {
    describe("BookReducer", function() {
      beforeEach(function() {
        var bookReducerInjector = require("inject!renderer/data/reducers/bookReducer");

        this.merge = sinon.stub();
        Book.prototype.merge = this.merge;
        bookReducer = bookReducerInjector({
          "renderer/data/models/Book": Book,
          "renderer/data/reducers/chapterReducer": sinon.stub()
        });
      });

      it("Should merge chapter with `isFetching` to true when a request is initiated", function() {
        bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_REQUEST
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.true;
      });

      it("Should merge state on successful update", function() {
        bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_SUCCESS,
          receivedAt: 12345,
          book: bookFixture
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.false;
        expect(nextState.id).to.equal(bookFixture.id);
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.title).to.equal(bookFixture.title);
        expect(nextState.chapters).to.deep.equal(bookFixture.chapters);
      });

      it("Should set `isFetching` to false on a failed request", function() {
        bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_FAILURE
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
