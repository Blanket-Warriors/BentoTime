import React from "react";
import { Link } from "react-router";

import BookmarkIcon from "app/renderer-process/components/BookmarkIcon";
import Img from "app/renderer-process/components/Img";

const BookHero = function BookHero({ book, dispatch }) {
  return (
    <div className="book-hero">
      <h1 className="book-hero__title">{book.title}</h1>
      <Img
        className="book-hero__image"
        src={book.image}
        alt={book.title}
        fallback="assets/images/book_placeholder.png"
      />
      <Link to="/" className="book-hero__back">Back</Link>
      <BookmarkIcon  className="book-hero__bookmark-icon" book={book} dispatch={dispatch} />
      <svg className="arrow"><path d="M0 0 L15 16 L30 0" /></svg>
    </div>
  );
};

export default BookHero;
