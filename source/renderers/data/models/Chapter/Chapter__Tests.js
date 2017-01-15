import { forEach } from "lodash";

import Chapter from "./Chapter";
import mangaEdenApi from "test/fixtures/mangaEden";
import expectedOutput from "test/fixtures/models/chapterFixture";

describe("Data", function() {
  describe("Models", function() {
    describe("Chapter", function() {
      it("Should create a new Chapter with initial state", function() {
        const initialState = {
          isFetching: "fetchState",
          viewed: "viewed",
          title: "title",
          releaseDate: "releaseDate",
          number: "number",
          id: "id",
          pages: ["page1", "page2"]
        };

        const myNewChapter = new Chapter(initialState);

        expect(myNewChapter instanceof Chapter).to.be.true;
        forEach(initialState, function(item, index) {
          expect(myNewChapter[index]).to.equal(item);
        });
        expect(myNewChapter.pages).to.be.an.array;
      });

      it("Should create a Chapter from Manga Eden Chapter Api data", function() {
        const responseData = mangaEdenApi.chapter;
        const chapterId = expectedOutput.id;
        const chapter = Chapter.createFromMangaEdenChapterApi(responseData, chapterId);
        expect(chapter instanceof Chapter).to.be.true;
        expect(chapter.id).to.equal(expectedOutput.id);
        expect(chapter.pages).to.be.an.array;

        const page = chapter.pages[0];
        expect(page.id).to.be.a.string;
        expect(page.image).to.be.a.string;
        expect(page.width).to.be.a.number;
        expect(page.height).to.be.a.number;
      });

      it("Should create a Chapter from Manga Eden Manga Api data", function() {
        const responseData = mangaEdenApi.manga.chapters[0];
        const chapterId = expectedOutput.id;
        const chapter = Chapter.createFromMangaEdenMangaApi(responseData, chapterId);
        expect(chapter instanceof Chapter).to.be.true;
        expect(chapter.id).to.equal(expectedOutput.id);
        expect(chapter.number).to.equal(expectedOutput.number);
        expect(chapter.title).to.equal(expectedOutput.title);
        expect(chapter.releaseDate).to.be.a.number;
        expect(chapter.pages).to.be.undefined;
      });

      it("Should correctly merge two Chapters", function() {
        const chapter1 = new Chapter({
          id: "12345",
          number: 5,
          releaseDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          viewed: true
        });

        const chapter2 = new Chapter({id: "12345", pages: [1,2,3,4,5] });

        const expectedProperties = {
          id: "12345",
          number: 5,
          releaseDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          viewed: true
        };

        const mergedChapter = chapter1.merge(chapter2);
        forEach(expectedProperties, function(property, index) {
          if(index == "pages") {
            expect(mergedChapter[index][0]).to.equal(property[0]);
          } else {
            expect(mergedChapter[index]).to.equal(property);
          }
        });
      });

      it("Should correctly merge a Chapter with an object containing new properties", function() {
        const chapter1 = new Chapter({
          number: 5,
          releaseDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          viewed: false
        });
        const mergedChapter = chapter1.merge({
          id: "12345",
          pages: [1,2,3,4,5],
          viewed: true
        });
        const expectedProperties = {
          id: "12345",
          number: 5,
          releaseDate: 1122334455,
          title: "the lamb",
          isFetching: false,
          viewed: true
        };

        forEach(expectedProperties, function(property, index) {
          if(index == "pages") {
            expect(mergedChapter[index][0]).to.equal(property[0]);
          } else {
            expect(mergedChapter[index]).to.equal(property);
          }
        });
      });
    });
  });
});
