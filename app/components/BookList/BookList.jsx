import React from "react";
import _ from "lodash";
import BookListItem from "app/components/BookListItem";

const BookList = function({ books, filter }) {

  const mappedBooks = _(books)
    .filter(book => {
      if(typeof filter === "boolean") {
        return filter;
      }

      if(typeof filter === "string" && filter.length > 0) {
        // Assume that if a user only types in `n`, they want something that starts with `n`.
        // Cut-off point for filtering from the beginning is 3 characters.
        if(filter.length <= 3) {
          const matchFromBeginning = new RegExp("^" + filter, "gi");
          return Boolean(book.title.match(matchFromBeginning));
        } else {
          const matchAnywhere = new RegExp(filter, "gi");
          return Boolean(book.title.match(matchAnywhere));
        }
      }

      return false;
    })
    .sortBy("alias")
    .map(book => {
      return <BookListItem key={book.id} book={book} />;
    })
    .value();

  return <ul className="book-list">{mappedBooks}</ul>;
};

BookList.propTypes = {
  books: React.PropTypes.object.isRequired
};

BookList.defaultProps = {
  filter: null
};

export default BookList;
