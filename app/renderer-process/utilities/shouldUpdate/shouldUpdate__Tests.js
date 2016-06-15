import moment from "moment";
import shouldUpdate from "./shouldUpdate";

describe("Utilities", function describeUtilities() {
  describe("shouldUpdate", function describeShouldUpdate() {
    it("should not update if toCheck doesn't exist", function() {
      expect(shouldUpdate()).to.be.false;
    });

    it("should update if toCheck does not have a lastUpdated property", function() {
      expect(shouldUpdate({})).to.be.true;
    });

    it("should update if toCheck is out of date", function() {
      expect(shouldUpdate({
        lastUpdated: moment().add(-1, "days")
      })).to.be.true;

      expect(shouldUpdate({
        lastUpdated: moment().add(-1, "days").unix()
      })).to.be.true;
    });

    it("should not update if toCheck is recent", function() {
      expect(shouldUpdate({
        lastUpdated: moment()
      })).to.be.false;

      expect(shouldUpdate({
        lastUpdated: moment().unix()
      })).to.be.false;
    });
  });
});
