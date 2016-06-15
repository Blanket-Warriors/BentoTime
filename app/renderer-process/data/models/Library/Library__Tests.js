import { forEach } from "lodash";
import { isMoment } from "moment";

import mangaEdenApi from "test/fixtures/mangaEden";
import expectedOutput from "test/fixtures/models/libraryFixture";

import mangaEdenStubs from "test/stubs/services/mangaEdenService";
import Book from "test/stubs/models/BookModel";

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
          isFetching: false,
          lastUpdated: 12345,
          totalBooks: 2,
          books: {
            book1: new Book({ "title": "book1" }),
            book2: new Book({ "title": "book2" })
          }
        };

        const myNewLibrary = new Library(initialState);

        expect(myNewLibrary instanceof Library).to.be.true;
        expect(myNewLibrary.isFetching).to.equal(false);
        expect(myNewLibrary.lastUpdated).to.equal(12345);
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
          lastUpdated: 12345,
          totalBooks: 2,
          books: {
            book1: { "title": "book1" },
            book2: { "title": "book2" }
          }
        });

        expect(mergedLibrary.lastUpdated).to.equal(12345);
        expect(mergedLibrary.totalBooks).to.equal(2);
        expect(mergedLibrary.books.book1 instanceof Book).to.be.true;
        expect(mergedLibrary.books.book1.title).to.equal("book1");
      });

      it("Should correctly merge two full libraries", function() {
        const library = new Library({
          isFetching: false,
          lastUpdated: 12345,
          totalBooks: 2,
          books: {
            book1: new Book({ "title": "book1" }),
            book2: new Book({ "title": "book2"})
          }
        });

        const mergedLibrary = library.merge({
          isFetching: true,
          lastUpdated: 1122334455,
          totalBooks: 3,
          books: {
            book1: { "title": "book1" },
            book2: { "title": "b0ok2" },
            book3: { "title": "book3" }
          }
        });

        expect(mergedLibrary.isFetching).to.equal(true);
        expect(mergedLibrary.lastUpdated).to.equal(1122334455);
        expect(mergedLibrary.totalBooks).to.equal(3);
        expect(mergedLibrary.books.book1).to.exist;
        expect(mergedLibrary.books.book2).to.exist;
        expect(mergedLibrary.books.book3).to.exist;
      });
    });
  });
});
