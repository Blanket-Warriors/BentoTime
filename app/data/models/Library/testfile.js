import Library from "./Library";
import apiResponse from "test/fixtures/mangaEden/listApiFixture";
import exampleOutput from "test/fixtures/models/libraryFixture";

describe("Data", function() {
  describe("Types", function() {
    describe("Library", function() {
      it("Should correctly format Manga Eden Api information", function testFormatBook() {
        const library = Library.createFromMangaEdenListApi(apiResponse);
        expect(library.totalBooks).to.be.a.number;
        expect(library.books).to.be.an.object;
      });
    });
  });
});
