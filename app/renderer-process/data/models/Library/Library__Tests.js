import { forEach } from "lodash";
import { isMoment } from "moment";

import mangaEdenApi from "test/fixtures/mangaEden";
import expectedOutput from "test/fixtures/models/libraryFixture";

import mangaEdenStubs from "test/stubs/mangaEdenServices";
import Book from "test/stubs/Book";

var Library;

describe("Data", function() {
  describe("Models", function() {
    describe("Library", function() {
      beforeEach(function() {
        var libraryInjector = require("inject!renderer/data/models/Library");
        Library = libraryInjector({
          "renderer/data/models/Book": Book,
          "renderer/data/services/mangaEdenApi": mangaEdenStubs
        });
      });

      it("Should create a new Library with initial state", function() {
        const initialState = {
          isFetching: "fetchState",
          lastUpdated: "lastUpdatedState",
          totalBooks: 2,
          books: {
            book1: new Book({ "title": "book1" }),
            book2: new Book({ "title": "book2" })
          }
        };

        const myNewLibrary = new Library(initialState);

        expect(myNewLibrary instanceof Library).to.be.true;
        expect(myNewLibrary.isFetching).to.equal("fetchState");
        expect(myNewLibrary.lastUpdated).to.equal("lastUpdatedState");
        expect(myNewLibrary.totalBooks).to.equal(2);
        expect(myNewLibrary.books.book1.title).to.equal("book1");
        expect(myNewLibrary.books.book2.title).to.equal("book2");
      });

      it("Should format books with Book prototypes on creation", function() {
        const myNewLibrary = new Library({ books: { book1: "book1" } });
        expect(myNewLibrary.books.book1 instanceof Book).to.be.true;
      });

      it("Should create a Library from Manga Eden Api data", function() {
        const responseData = mangaEdenApi.list;
        const library = Library.createFromMangaEdenListApi(responseData);
        expect(library.totalBooks).to.be.a.number;
        expect(library.books).to.be.an.object;
        expect(library.lastUpdated).to.be.undefined;
        expect(library.isFetching).to.be.undefined;
      });

      it("Should correctly merge a library properties into an empty library", function() {
        const library = new Library();
        const mergedLibrary = library.merge({
          isFetching: "fetchState",
          lastUpdated: "lastUpdatedState",
          totalBooks: 2,
          books: {
            book1: { "title": "book1" },
            book2: { "title": "book2" }
          }
        });

        expect(mergedLibrary.isFetching).to.equal("fetchState");
        expect(mergedLibrary.lastUpdated).to.equal("lastUpdatedState");
        expect(mergedLibrary.totalBooks).to.equal(2);
        expect(mergedLibrary.books.book1 instanceof Book).to.be.true;
        expect(mergedLibrary.books.book1.title).to.equal("book1");
      });

      it("Should correctly merge two full libraries");

      it("Should not merge a library with a more up-to-date library");
    });
  });
});
