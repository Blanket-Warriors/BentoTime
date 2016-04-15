import React from "react";
import { map } from "lodash";

import ChapterList from "app/components/ChapterList";
import { Link } from "react-router";

const BookView = function BookView({ book }) {
  if(!book) { return <div className="book-view__loading">loading...</div>; }

  return (
    <div className="book-view">
      <Link to="/" className="book-view__back">Back</Link>
      <h1 className="book-view__title">{book.title}</h1>
      <p className="book-view__description">{book.description}</p>
      <ChapterList book={book} />
    </div>
  );
};

export default BookView;
