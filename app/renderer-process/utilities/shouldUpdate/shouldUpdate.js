import moment, { isMoment } from "moment";

export default function shouldUpdate(toCheck) {
  if(!toCheck) { return false; }
  var lastUpdated = formatDate(toCheck.lastUpdated);
  var lastChapterDate = formatDate(toCheck.lastChapterDate);
  if(!lastUpdated) { return true; }

  console.log(lastChapterDate && lastChapterDate.isBefore(lastUpdated));
  if(lastChapterDate && lastChapterDate.isBefore(lastUpdated)) {
    return false;
  }
  var threeHoursAgo = moment().add(-2, "hours");
  return lastUpdated.isBefore(threeHoursAgo, "hour");
}

function formatDate(rawDate) {
  if(!rawDate) { return null; }
  if(isMoment(rawDate)) { return rawDate; }
  return moment.unix(rawDate);
}
