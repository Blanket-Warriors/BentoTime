import { forEach } from "lodash";
import { isMoment } from "moment";

import Chapter from "renderer/data/models/Chapter";
import mangaEdenApi from "test/fixtures/mangaEden";
import bookFixture from "test/fixtures/models/bookFixture";

import mangaEdenStubs from "test/stubs/mangaEdenServices";
import ChapterStub from "test/stubs/Chapter";

var bookInjector = require("inject!renderer/data/models/Book");
var Book = bookInjector({
  "renderer/data/models/Chapter": Chapter,
  "renderer/data/services/mangaEdenApi": mangaEdenStubs
});

describe("Data", function() {
  describe("Models", function() {
    describe("Book", function() {
      it("Should create a new Book with initial state", function() {
        const initialState = {
          alias: "alias",
          artist: "artist",
          author: "author",
          bookmarked: "bookmarked",
          categories: ["category1", "category2"],
          chapters: [undefined, undefined],
          created: "created",
          description: "description",
          hits: "hits",
          id: "id",
          image: "image",
          isFetching: "isFetching",
          lastChapterDate: "lastChapterDate",
          lastUpdated: "lastUpdated",
          status: "status",
          title: "title"
        };
        const myNewBook = new Book(initialState);
        expect(myNewBook instanceof Book).to.be.true;

        forEach(initialState, function(item, index) {
          if(!["chapters", "categories"].includes(index)) {
            expect(myNewBook[index]).to.equal(item);
          }
        });
        expect(myNewBook.chapters).to.be.an.array;
        expect(myNewBook.categories).to.be.an.array;
      });

      it("Should format chapter objects as Chapters on creation", function() {
        const myNewLibrary = new Book({ chapters: [{}, {}] });
        expect(myNewLibrary.chapters[0] instanceof Chapter).to.be.true;
      });

      it("Should create a Book from Manga Eden List Api data", function() {
        const responseData = mangaEdenApi.list.manga[0];
        const expectedOutput = new Book({
          "alias": "flower-dream",
          "categories": [ "Sci-fi" ],
          "hits": 936,
          "id": "5372389645b9ef5a0b1d20d8",
          "image": mangaEdenStubs.imgHost + "ad/ad8dbe2c909de99899f1015a360f75e3ced31023672d6ff0d2b7547c.jpg",
          "lastChapterDate": 1416420134,
          "status": 1,
          "title": "Flower Dream"
        });

        const book = Book.createFromMangaEdenListApi(responseData);
        expect(book instanceof Book).to.be.true;

        forEach(expectedOutput, function(item, index) {
          if(["lastChapterDate"].includes(index)) {
            expect(isMoment(book[index])).to.be.true;
          } else if(["categories"].includes(index)) {
            expect(book[index]).to.be.an.array;
          } else {
            expect(book[index]).to.equal(item);
          }
        });
        expect(book.chapters).to.be.an.array;
      });

      it("Should create a Book from Manga Eden Manga Api data", function() {
        const responseData = mangaEdenApi.manga;
        const expectedOutput = bookFixture;

        const bookId = expectedOutput.id;
        const book = Book.createFromMangaEdenMangaApi(responseData, bookId);
        expect(book instanceof Book).to.be.true;

        forEach(expectedOutput, function(item, index) {
          if(["lastChapterDate", "created"].includes(index)) {
            expect(isMoment(book[index])).to.be.true;
          } else if(["chapters", "categories"].includes(index)) {
            expect(book[index]).to.be.an.array;
          } else {
            expect(book[index]).to.equal(item);
          }
        });
        expect(book.chapters).to.be.an.array;
      });

      it("Should correctly merge two Books", function() {
        const book1 = new Book({
          id: "12345",
          lastChapterDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          bookmarked: false
        });

        const book2 = new Book({
          hits: 500,
          lastChapterDate:1234512345
        });

        const expectedProperties = {
          id: "12345",
          lastChapterDate: 1234512345,
          hits: 500,
          title: "the lamb",
          isFetching: false,
          bookmarked: false
        };

        const mergedBook = book1.merge(book2);
        forEach(expectedProperties, function(property, index) {
          if(["categories", "chapters"].includes(index)) {
            expect(mergedBook[index][0]).to.equal(property[0]);
          } else {
            expect(mergedBook[index]).to.equal(property);
          }
        });
      });

      it("Should correctly merge a Book with an object containing new properties", function() {
        const book1 = new Book({
          id: "12345",
          lastChapterDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          bookmarked: false
        });

        const mergedBook = book1.merge({
          hits: 500,
          lastChapterDate:1234512345,
          bookmarked: true
        });

        const expectedProperties = {
          id: "12345",
          lastChapterDate: 1234512345,
          hits: 500,
          title: "the lamb",
          isFetching: false,
          bookmarked: true
        };

        forEach(expectedProperties, function(property, index) {
          if(["categories", "chapters"].includes(index)) {
            expect(mergedBook[index][0]).to.equal(property[0]);
          } else {
            expect(mergedBook[index]).to.equal(property);
          }
        });
      });

      it("Should format html entities of new books from API sources", function() {
        const responseData = mangaEdenApi.manga;
        responseData.title = "f&ouml;o &hearts; b&aring;r &#x1D306; baz";
        responseData.description = "f&ouml;o &hearts; b&aring;r &#x1D306; baz";
        const bookID = "55a1a17b719a1609004ad58f";
        const book = Book.createFromMangaEdenMangaApi(responseData, bookID);
        expect(book.title).to.equal("föo ♥ bår 𝌆 baz");
        expect(book.description).to.equal("föo ♥ bår 𝌆 baz");
      });
    });
  });
});
