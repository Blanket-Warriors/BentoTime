import book from "test/fixtures/models/bookFixture";
import mangaEdenServiceStubs from "test/stubs/services/mangaEdenService";

var libraryActions;

describe("Data", function() {
  describe("Actions", function() {
    describe("libraryActions", function() {
      beforeEach(function() {
        var libraryActionsInjector = require("inject!renderer/data/actions/libraryActions");

        libraryActions = libraryActionsInjector({
          "renderer/data/services/mangaEdenApi": mangaEdenServiceStubs
        });
      });


      it("Should return correct actions on fetch", function() {
        const fetchLibraryThunk = libraryActions.fetchLibrary();
        const dispatchFunction = sinon.stub();
        return fetchLibraryThunk(dispatchFunction)
          .then(function() {
            const firstCallArgs = dispatchFunction.args[0];
            const secondCallArgs = dispatchFunction.args[1];

            expect(firstCallArgs[0].type).to.equal("FETCH_LIBRARY_REQUEST");
            expect(secondCallArgs[0].type).to.equal("FETCH_LIBRARY_SUCCESS");
          });
      });
    });
  });
});
