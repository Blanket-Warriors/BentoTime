import moment, { isMoment } from "moment";

export default function shouldUpdate(toCheck) {
  if(!toCheck || !toCheck.lastUpdated) {
    return true;
  }
  var lastUpdated;
  if(isMoment(toCheck.lastUpdated)) {
    lastUpdated = toCheck.lastUpdated;
  } else {
    lastUpdated = moment.unix(toCheck.lastUpdated);
  }
  const threeHoursAgo = moment().add(-2, "hours");
  return lastUpdated.isBefore(threeHoursAgo, "hour");
}
