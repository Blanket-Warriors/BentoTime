import libraryFixture from "test/fixtures/models/libraryFixture";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";

import Library from "test/stubs/models/LibraryModel";

var libraryReducer;

describe("Data", function() {
  describe("Reducers", function() {
    describe("library", function() {
      beforeEach(function() {
        var libraryReducerInjector = require("inject!renderer/data/reducers/libraryReducer");

        this.merge = sinon.stub();
        Library.prototype.merge = this.merge;
        libraryReducer = libraryReducerInjector({
          "renderer/data/models/Library": Library,
          "renderer/data/reducers/bookReducer": sinon.stub()
        });
      });

      it("Should set `isFetching` when a request is initiated", function setIsFetching() {
        libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_REQUEST
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.true;
      });

      it("Should merge states on success", function SetEmptyState() {
        libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_SUCCESS,
          library: libraryFixture,
          receivedAt: 12345
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.books).to.deep.equal(libraryFixture.books);
        expect(nextState.isFetching).to.be.false;
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.totalBooks).to.equal(libraryFixture.totalBooks);
      });

      it("Should set `isFetching` to false on a failed request", function respondErrors() {
        libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_FAILURE
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
