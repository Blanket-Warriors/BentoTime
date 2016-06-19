import React from "react";

import BookHero from "renderer/components/BookHero";
import BookInfo from "renderer/components/BookInfo";

const BookView = function BookView({ book, dispatch }) {
  if(!book) { return <h3 className="book-view--loading">loading...</h3>; }

  return (
    <div className="book-view">
      <BookHero className="book-view__hero" book={book} dispatch={dispatch} />
      <BookInfo className="book-view__info" book={book}/>
    </div>
  );
};

export default BookView;
