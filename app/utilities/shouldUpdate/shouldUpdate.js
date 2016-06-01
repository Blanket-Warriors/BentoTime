import moment, { isMoment } from "moment";
import { isEmpty } from "lodash";

export default function shouldUpdate(toCheck) {
  if(!toCheck || isEmpty(toCheck) || !toCheck.lastUpdated) {
    return true;
  }

  var lastUpdated;
  if(isMoment(toCheck.lastUpdated)) {
    lastUpdated = toCheck.lastUpdated;
  } else {
    lastUpdated = moment(toCheck.lastUpdated, "YYYY-MM-DDTHH:mm:ss.SSSZ");
  }

  const threeHoursAgo = moment().add(-2, "hours");
  return lastUpdated.isBefore(threeHoursAgo, "hour");
}
