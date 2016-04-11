import React from "react";
import { Link } from "react-router";

const BookListItem = function({ book }) {
  return (
    <li className="book-list-item">
      <Link
        className="book-list-item__name"
        to={`book/${book.id}`}
      >
        {book.title}
      </Link>
    </li>
  );
};

BookListItem.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default BookListItem;
