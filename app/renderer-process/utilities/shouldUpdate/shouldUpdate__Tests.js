import shouldUpdate from "./shouldUpdate";

describe("Utilities", function describeUtilities() {
  describe("shouldUpdate", function describeShouldUpdate() {
    it("should update if toCheck doesn't exist");
    it("should update if toCheck does not have a lastUpdated property");
    it("should update if toCheck is out of date with a string date");
    it("should update if toCheck is out of date with a moment.js object date");
    it("should not update if toCheck is recent with a string date");
    it("should not update if toCheck is recent with a moment.js object date");
  });
});
