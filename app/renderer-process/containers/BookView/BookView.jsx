import React from "react";
import combine from "renderer/utilities/combineClasses";

import BookHero from "renderer/components/BookHero";
import BookInfo from "renderer/components/BookInfo";

const BookView = function BookView({ book, dispatch, className }) {
  if(!book || !book.chapters || book.isFetching) {
    return (
      <h3 className={combine("book-view book-view--loading", className)}>
        loading...
      </h3>
    );
  }

  return (
    <div className={combine("book-view", className)}>
      <BookHero className="book-view__hero" book={book} dispatch={dispatch} />
      <BookInfo className="book-view__info" book={book}/>
    </div>
  );
};

BookView.propTypes = {
  book: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

BookView.defaultProps = {
  book: null,
  dispatch: function(){},
  className: ""
};

export default BookView;
