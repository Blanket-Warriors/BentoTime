import React from "react";
import { map } from "lodash";

import ChapterList from "app/window/components/ChapterList";
import { Link } from "react-router";

const BookView = function BookView({ book }) {
  if(!book) { return <h3 className="book-view__loading">loading...</h3>; }

  return (
    <div className="book-view">
      <Link to="/" className="book-view__back">Back</Link>
      <h1 className="book-view__title">{book.title}</h1>
      <p className="book-view__description">{book.description}</p>
      <ChapterList className="book-view__chapters" book={book} />
    </div>
  );
};

export default BookView;
