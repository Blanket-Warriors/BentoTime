import React from "react";

import ChapterList from "app/renderer-process/components/ChapterList";

const BookInfo = function BookInfo({ book }) {
  return (
    <div className="book-info">
      <ChapterList className="book-info__chapters" book={book} />
      <p className="book-info__description">{book.description}</p>
    </div>
  );
};

export default BookInfo;
