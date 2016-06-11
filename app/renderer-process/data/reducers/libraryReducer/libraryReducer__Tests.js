import libraryReducer from "./libraryReducer";
import libraryFixture from "test/fixtures/models/libraryFixture";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";

describe("Data", function() {
  describe("Reducers", function() {
    describe("library", function() {
      xit("Should populate empty states correctly on success", function SetEmptyState() {
        const library = libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_SUCCESS,
          library: libraryFixture,
          receivedAt: 12345
        });

        expect(library.books).to.deep.equal(libraryFixture.books);
        expect(library.isFetching).to.be.false;
        expect(library.lastUpdated).to.equal(12345);
        expect(library.totalBooks).to.equal(libraryFixture.totalBooks);
      });

      xit("Should update active states correctly on success", function SetActiveState() {
        const bookId = "5372389645b9ef5a0b1d20d8";
        const library = libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_SUCCESS,
          library: libraryFixture,
          receivedAt: 12345
        });

        library.books["la"] = {};
        library.books[bookId] = {};

        const newLibrary = libraryReducer(library, {
          type: ActionTypes.FETCH_LIBRARY_SUCCESS,
          library: libraryFixture,
          receivedAt: 12345
        });

        expect(newLibrary.books["la"]).to.exist;
        expect(newLibrary.books[bookId].title).to.exist;
      });

      xit("Should set `isFetching` when a request is initiated", function setIsFetching() {
        const nextState = libraryReducer(undefined, {
          type: ActionTypes.FETCH_LIBRARY_REQUEST
        });

        expect(nextState.isFetching).to.be.true;
      });

      xit("Should set `isFetching` to false on a failed request", function respondErrors() {
        const oldState = { isFetching: true };

        const nextState = libraryReducer(oldState, {
          type: ActionTypes.FETCH_LIBRARY_FAILURE
        });

        expect(oldState.isFetching).to.be.true;
        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
