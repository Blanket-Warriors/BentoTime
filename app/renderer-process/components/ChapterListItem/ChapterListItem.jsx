import React from "react";
import moment from "moment";
import { Link } from "react-router";
import combineClasses from "app/renderer-process/utilities/combineClasses";

const ChapterListItem = function({ book, chapter }) {
  const viewed = chapter.viewed ? "viewed" : "";
  const classes = combineClasses("chapter-list-item", viewed);
  if(chapter.title === "Revenge"){ console.log(chapter); }
  return (
    <li className={classes}>
      <Link
        className="chapter-list-item__name"
        to={`/book/${book.id}/chapter/${chapter.id}`}
      >
        {chapter.number}
      </Link>
    </li>
  );
};

ChapterListItem.propTypes = {
  book: React.PropTypes.object.isRequired,
  chapter: React.PropTypes.object.isRequired
};

export default ChapterListItem;
