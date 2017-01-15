import React from "react";
import { Image } from "zuck";
import { Link } from "react-router";
import combine from "renderer/utilities/combineClasses";

import BookmarkIcon from "renderer/components/BookmarkIcon";

const BookHero = function BookHero({ book, dispatch, className }) {
  return (
    <div className={combine("book-hero", className)}>
      <h1 className="book-hero__title">{book.title}</h1>
      <Image
        className="book-hero__image"
        src={book.image || ""}
        alt={book.title}
        fallback="assets/images/book_placeholder.png"
      />
      <Link to="/" className="book-hero__back">Back</Link>
      <BookmarkIcon className="book-hero__bookmark-icon" book={book} dispatch={dispatch} />
      <svg className="book-hero__arrow"><path d="M0 0 L15 16 L30 0" /></svg>
    </div>
  );
};

BookHero.propTypes = {
  book: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

BookHero.defaultProps = {
  book: null,
  dispatch: function(){},
  className: ""
};

export default BookHero;
