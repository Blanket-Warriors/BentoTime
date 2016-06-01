import Chapter from "./Chapter";
import apiResponse from "test/fixtures/mangaEden/chapterApiFixture";
import exampleOutput from "test/fixtures/models/chapterFixture";

describe("Data", function() {
  describe("Types", function() {
    describe("Chapter", function() {
      it("Should correctly format Manga Eden Api information", function testFormatChapter() {
        const chapterID ="4e711cb0c09225616d037cc2";
        const chapter = Chapter.createFromMangaEdenChapterApi(apiResponse, chapterID);
        expect(chapter.id).to.deep.equal(exampleOutput.id);
        expect(chapter.pages).to.be.an.array;
        expect(chapter.pages[0]).to.be.a.string;
      });
    });
  });
});
