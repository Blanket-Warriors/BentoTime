import React from "react";
import { Link } from "react-router";
import Img from "renderer/components/Img";
import combineClasses from "renderer/utilities/combineClasses";

const BookListItem = function({ book, hasNewChapter }) {
  const newChapterFlag = <div className="book-list__new-chapter">New Chapter!</div>;

  return (
    <li className="book-list-item">
      <Link className="book-list-item__link" to={`book/${book.id}`}>
        {hasNewChapter ? newChapterFlag : ""}
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
