import { reduce } from "lodash";

function combineClasses() {
  var classes = reduce(arguments, function(classes, newClass) {
    if(typeof newClass !== "string" && typeof newClass !== "number") {
      return classes;
    }
    return classes + " " + newClass;
  }, "");

  // Replace consecutive spaces with single spaces
  classes = classes.replace(new RegExp(/ {2,}/g), " ");

  // Remove spaces at the beginning and end of the line
  classes = classes.replace(new RegExp(/^ +| +$/g), "");

  return classes;
}

export default combineClasses;
