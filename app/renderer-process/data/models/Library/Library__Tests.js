import Library from "./Library";
import Book from "renderer/data/models/Book";
import apiResponse from "test/fixtures/mangaEden/listApiFixture";
import exampleOutput from "test/fixtures/models/libraryFixture";

describe("Data", function() {
  describe("Models", function() {
    describe("Library", function() {
      it("Should create a new Library with initial state", function() {
        const myNewLibrary = new Library({
          isFetching: "fetchState",
          lastUpdated: "lastUpdatedState",
          totalBooks: 2,
          books: {
            book1: "book1",
            book2: "book2"
          }
        });

        expect(myNewLibrary instanceof Library).to.be.true;
        expect(myNewLibrary.isFetching).to.equal("fetchState");
        expect(myNewLibrary.lastUpdated).to.equal("lastUpdatedState");
        expect(myNewLibrary.totalBooks).to.equal(2);
        expect(myNewLibrary.books).to.be.an.object;
      });

      it("Should format books with Book prototypes on creation", function() {
        const myNewLibrary = new Library({ books: { book1: "book1" } });
        expect(myNewLibrary.books.book1 instanceof Book).to.be.true;
      });

      it("Should create a Library from Manga Eden Api data", function() {
        const library = Library.createFromMangaEdenListApi(apiResponse);
        expect(library.totalBooks).to.be.a.number;
        expect(library.books).to.be.an.object;
        expect(library.lastUpdated).to.be.undefined;
        expect(library.isFetching).to.be.undefined;
      });

      it("Should correctly merge a full library into an empty library");

      it("Should correctly merge two full libraries");

      it("Should not merge a library with a more up-to-date library");
    });
  });
});
