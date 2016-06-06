import React from "react";

import BookHero from "app/renderer-process/components/BookHero";
import BookInfo from "app/renderer-process/components/BookInfo";

const BookView = function BookView({ book, dispatch }) {
  if(!book) { return <h3 className="book-view__loading">loading...</h3>; }

  return (
    <div className="book-view">
      <BookHero className="book-view__hero" book={book} dispatch={dispatch} />
      <BookInfo className="book-view__info" book={book}/>
    </div>
  );
};

export default BookView;
