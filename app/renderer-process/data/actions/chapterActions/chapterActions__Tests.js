import book from "test/fixtures/models/bookFixture";
import chapter from "test/fixtures/models/chapterFixture";
import mangaEdenServiceStubs from "test/stubs/services/mangaEdenService";

var chapterActions;

describe("Data", function() {
  describe("Actions", function() {
    describe("chapterActions", function() {
      beforeEach(function() {
        var chapterActionsInjector = require("inject!renderer/data/actions/chapterActions");

        chapterActions = chapterActionsInjector({
          "renderer/data/services/mangaEdenApi": mangaEdenServiceStubs
        });
      });

      it("Should return correct actions on fetch", function() {
        const fetchBookThunk = chapterActions.fetchChapter(book, chapter);
        const dispatchFunction = sinon.stub();
        return fetchBookThunk(dispatchFunction)
          .then(function() {
            const firstCallArgs = dispatchFunction.args[0];
            const secondCallArgs = dispatchFunction.args[1];

            expect(firstCallArgs[0].type).to.equal("FETCH_CHAPTER_REQUEST");
            expect(secondCallArgs[0].type).to.equal("FETCH_CHAPTER_SUCCESS");
          });
      });
    });
  });
});
