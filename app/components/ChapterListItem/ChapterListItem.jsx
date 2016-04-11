import React from "react";
import { Link } from "react-router";

const ChapterListItem = function({ key, book, chapter }) {
  return (
    <li className="chapter-list-item" key={key}>
      <Link
        className="chapter-list-item__name"
        to={"/book/" + book.id + "/chapter/" + chapter.id}
      >
        {`${chapter.number} - ${chapter.title}`}
      </Link>
    </li>
  );
};

ChapterListItem.propTypes = {
  book: React.PropTypes.object.isRequired,
  chapter: React.PropTypes.object.isRequired
};

export default ChapterListItem;
