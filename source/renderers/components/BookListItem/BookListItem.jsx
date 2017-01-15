import React from "react";
import { Link } from "react-router";
import { Image } from "zuck";
import combine from "renderer/utilities/combineClasses";

const BookListItem = function({ book, hasNewChapter, className }) {
  return (
    <li className={combine("book-list-item", className)}>
      <Link className="book-list-item__link" to={`book/${book.id}`}>
        {hasNewChapter ? <div className="book-list-item__new-chapter">New Chapter!</div> : ""}
        <Image
          className="book-list-item__image"
          src={book.image || "assets/images/book_placeholder.png"}
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
  book: React.PropTypes.object.isRequired,
  className: React.PropTypes.string,
  hasNewChapter: React.PropTypes.bool
};

BookListItem.defaultProps = {
  book: null,
  className: "",
  hasNewChapter: false
};

export default BookListItem;
