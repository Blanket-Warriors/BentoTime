import React from "react";
import moment from "moment";
import { Link } from "react-router";
import combineClasses from "app/renderer-process/utilities/combineClasses";

const ChapterListItem = function({ book, chapter }) {
  const viewed = chapter.viewed ? "chapter-list-item--viewed" : "";
  const classes = combineClasses("chapter-list-item", viewed);
  return (
    <Link
      className={classes}
      to={`/book/${book.id}/chapter/${chapter.id}`}
    >
      {chapter.number}
    </Link>
  );
};

ChapterListItem.propTypes = {
  book: React.PropTypes.object.isRequired,
  chapter: React.PropTypes.object.isRequired
};

export default ChapterListItem;
