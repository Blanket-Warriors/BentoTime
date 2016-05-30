import React from "react";
import { Link } from "react-router";
import Img from "app/window/components/Img";

const BookListItem = function({ book }) {
  return (
    <li className="book-list-item">
      <Link
        className="book-list-item__link"
        to={`book/${book.id}`}
      >
      <span className="book-list-item__title">{book.title}</span>
      <Img src={book.image} alt={book.title} className="book-list-item__image"/>
      </Link>
    </li>
  );
};

BookListItem.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default BookListItem;
