import { getLibrary$, getBook$, getChapter$ } from "./mangaEdenApi";
import listApiFixture from "test/fixtures/mangaEden/listApiFixture.js";
import mangaApiFixture from "test/fixtures/mangaEden/mangaApiFixture.js";
import chapterApiFixture from "test/fixtures/mangaEden/chapterApiFixture.js";

describe("Data", function() {
  describe("Services", function() {
    describe("MangaEden", function() {
      beforeEach(function () {
        this.xhr = sinon.useFakeXMLHttpRequest();
        this.xhr.onCreate = req => this.request = req;
      });

      afterEach(function () {
        this.request = null;
        this.xhr.restore();
      });

      it("should get the manga library", function() {
        const callback = sinon.spy();
        getLibrary$().then(callback);

        this.request.respond(
          200,
          { "Content-Type": "application/json" },
          JSON.stringify(listApiFixture)
        );

        expect(callback.calledOnce);
      });

      it("should get manga book information", function() {
        const callback = sinon.spy();
        const mangaID = "4e70e9f6c092255ef7004336";
        getBook$(mangaID).then(callback);

        this.request.respond(
          200,
          { "Content-Type": "application/json" },
          JSON.stringify(mangaApiFixture)
        );

        expect(callback.calledOnce);
      });

      it("should get a chapter\'s pages", function() {
        const callback = sinon.spy();
        const chapterID = "4e711cb0c09225616d037cc2";
        getChapter$(chapterID).then(callback);

        this.request.respond(
          200,
          { "Content-Type": "application/json" },
          JSON.stringify(chapterApiFixture)
        );

        expect(callback.calledOnce);
      });
    });
  });
});
