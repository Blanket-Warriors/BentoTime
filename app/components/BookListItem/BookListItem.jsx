import React from "react";
import { Link } from "react-router";

const BookListItem = function({ key, book }) {
  return (
    <li className="book-list-item" key={key}>
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
