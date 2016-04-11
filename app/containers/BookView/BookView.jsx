import React from "react";
import { map } from "lodash";

import ChapterList from "app/components/ChapterList";
import { Link } from "react-router";

const BookView = function BookView({ book }) {
  if(!book) { return <div className="book-view">loading...</div>; }

  return (
    <div className="book-view">
      <h1 className="book-view__title">{book.title}</h1>
      <p className="book-view__description">{book.description}</p>
      <Link to="/" className="book-view__back">Back</Link>
      <ChapterList book={book} />
    </div>
  );
};

export default BookView;
