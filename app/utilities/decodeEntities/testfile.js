import decodeEntities from "app/utilities/decodeEntities";

describe("Utilities", function describeUtilities() {
  describe("decodeEntities", function describeClasses() {
    it("should decode entities", function shouldDecodeEntities() {
      const result = decodeEntities("Foo &#xA9; bar &#x1D306; baz &#x2603; qux");
      expect(result).to.equal("Foo © bar 𝌆 baz ☃ qux");
    });

    it("should strip tags", function shouldStripHtmlTags() {
      const result = decodeEntities("<h1>test the tags</h1>");
      expect(result).to.equal("test the tags");
    });

    it("should decode japanese", function shouldDecodeJapanese() {
      const result = decodeEntities("&#x30cf;&#x30ed;&#x30fc;&#x30ef;&#x30fc;&#x30eb;&#x30c9;");
      expect(result).to.equal("ハローワールド");
    });
  });
});
