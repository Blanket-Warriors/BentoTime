import book from "test/fixtures/models/bookFixture";
import mangaEdenServiceStubs from "test/stubs/services/mangaEdenService";

var bookActions;

describe("Data", function() {
  describe("Actions", function() {
    describe("bookActions", function() {
      beforeEach(function() {
        var bookActionsInjector = require("inject!renderer/data/actions/bookActions");

        bookActions = bookActionsInjector({
          "renderer/data/services/mangaEdenApi": mangaEdenServiceStubs
        });
      });


      it("Should return correct actions on fetch", function() {
        const fetchBookThunk = bookActions.fetchBook(book);
        const dispatchFunction = sinon.stub();
        return fetchBookThunk(dispatchFunction)
          .then(function(book) {
            const firstCallArgs = dispatchFunction.args[0];
            const secondCallArgs = dispatchFunction.args[1];

            expect(firstCallArgs[0].type).to.equal("FETCH_BOOK_REQUEST");
            expect(secondCallArgs[0].type).to.equal("FETCH_BOOK_SUCCESS");
          });
      });
    });
  });
});
