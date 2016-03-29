import React from 'react';
import { map } from 'lodash';
import BookListItem from 'app/components/BookListItem';

const BookList = function({ books }) {
  const mappedBooks = map(books, book => {
    return <BookListItem key={book.id} book={book} />;
  });
  return <ul className="book-list">{mappedBooks}</ul>;
};

BookList.propTypes = {
  books: React.PropTypes.object.isRequired
};

export default BookList;
