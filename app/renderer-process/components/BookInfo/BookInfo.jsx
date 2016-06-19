import React from "react";
import combine from "renderer/utilities/combineClasses";

import ChapterList from "renderer/components/ChapterList";

const BookInfo = function BookInfo({ book, className }) {
  return (
    <div className={combine("book-info", className)}>
      <ChapterList className="book-info__chapters" book={book} />
      <p className="book-info__description">{book.description}</p>
    </div>
  );
};

BookInfo.propTypes = {
  book: React.PropTypes.object.isRequired,
  className: React.PropTypes.string
};

BookInfo.defaultProps = {
  book: null,
  className: ""
};

export default BookInfo;
