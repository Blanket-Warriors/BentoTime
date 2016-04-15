import React from "react";
import { Link } from "react-router";

const ChapterListItem = function({ book, chapter }) {
  return (
    <li className="chapter-list-item">
      <Link
        className="chapter-list-item__name"
        to={"/book/" + book.id + "/chapter/" + chapter.id}
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
