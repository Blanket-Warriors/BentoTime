import React from "react";
import { Link } from "react-router";
import Img from "app/renderer-process/components/Img";

const BookListItem = function({ book }) {
  return (
    <li className="book-list-item">
      <Link className="book-list-item__link" to={`book/${book.id}`}>
        <Img
          className="book-list-item__image"
          src={book.image}
          fallback="assets/images/book_placeholder.png"
          alt={book.title}
        />
      </Link>
      <div className="book-list-item__options">
        <span className="book-list-item__title">{book.title}</span>
      </div>
    </li>
  );
};

BookListItem.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default BookListItem;
