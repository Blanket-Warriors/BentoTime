import combineClasses from "app/utilities/combineClasses";

describe("Utilities", function describeUtilities() {
  describe("CombineClasses", function describeClasses() {
    it("Should combine classes", function shouldCombineClasses() {
      var classesToCombine = combineClasses("hello", "my", "name", "is", "ben");
      expect(classesToCombine).to.equal("hello my name is ben");
    });

    it("Should remove extra spaces", function shouldRemoveSpaces() {
      var classesToCombine = combineClasses("hello my name ", " is", "  ", "ben ");
      expect(classesToCombine).to.equal("hello my name is ben");
    });
  });
});
