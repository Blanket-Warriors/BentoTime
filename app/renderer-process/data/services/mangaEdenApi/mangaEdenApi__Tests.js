import fetchMock from "fetch-mock";
import { getLibrary$, getBook$, getChapter$ } from "./mangaEdenApi";
import listApiFixture from "test/fixtures/mangaEden/listApiFixture.js";
import mangaApiFixture from "test/fixtures/mangaEden/mangaApiFixture.js";
import chapterApiFixture from "test/fixtures/mangaEden/chapterApiFixture.js";

describe("Data", function() {
  describe("Services", function() {
    describe("MangaEden", function() {
      beforeEach(function() {
        this.mangaID = "4e70e9f6c092255ef7004336";
        this.chapterID = "4e711cb0c09225616d037cc2";

        fetchMock
          .mock("http://www.mangaeden.com/api/list/0/", JSON.stringify(listApiFixture))
          .mock(`http://www.mangaeden.com/api/manga/${this.mangaID}/`, JSON.stringify(mangaApiFixture))
          .mock(`http://www.mangaeden.com/api/chapter/${this.chapterID}/`, JSON.stringify(chapterApiFixture));
      });

      afterEach(function() {
        fetchMock.restore();
      });

      it("should get the manga library", function() {
        return getLibrary$()
          .then(function() {
            expect(fetchMock.called("http://www.mangaeden.com/api/list/0/")).to.be.true;
          })
          .then(fetchMock.restore);
      });

      it("should get manga book information", function() {
        return getBook$(this.mangaID)
          .then(() => {
            expect(fetchMock.called(`http://www.mangaeden.com/api/manga/${this.mangaID}/`)).to.be.true;
          })
          .then(fetchMock.restore);
      });

      it("should get a chapter\'s pages", function() {
        return getChapter$(this.chapterID)
          .then(() => {
            expect(fetchMock.called(`http://www.mangaeden.com/api/chapter/${this.chapterID}/`)).to.be.true;
          })
          .then(fetchMock.restore);
      });
    });
  });
});
