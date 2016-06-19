import React from "react";
import moment from "moment";
import { Link } from "react-router";
import combine from "renderer/utilities/combineClasses";

const ChapterListItem = function({ book, chapter, className }) {
  const viewed = chapter.viewed ? "chapter-list-item--viewed" : "";
  const classes = combine("chapter-list-item", viewed, className);
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
  chapter: React.PropTypes.object.isRequired,
  className: React.PropTypes.string
};

ChapterListItem.defaultProps = {
  book: null,
  chapter: null,
  className: ""
};

export default ChapterListItem;
