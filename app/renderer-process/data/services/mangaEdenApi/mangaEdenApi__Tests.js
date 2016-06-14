import fetchMock from "fetch-mock";
import { getLibrary$, getBook$, getChapter$ } from "./mangaEdenApi";
import mangaEdenFixtures from "test/fixtures/mangaEden";

describe("Data", function() {
  describe("Services", function() {
    describe("MangaEden", function() {
      beforeEach(function() {
        this.mangaID = "4e70e9f6c092255ef7004336";
        this.chapterID = "4e711cb0c09225616d037cc2";

        fetchMock
          .mock("http://www.mangaeden.com/api/list/0/", JSON.stringify(mangaEdenFixtures.list))
          .mock(`http://www.mangaeden.com/api/manga/${this.mangaID}/`, JSON.stringify(mangaEdenFixtures.manga))
          .mock(`http://www.mangaeden.com/api/chapter/${this.chapterID}/`, JSON.stringify(mangaEdenFixtures.chapter));
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
