import React from "react";
import _ from "lodash";
import moment from "moment";
import BookListItem from "app/window/components/BookListItem";
import combine from "app/utilities/combineClasses";

const BookList = function({ books, searchFilter, dateFilter, className }) {
  const today = moment();
  const matchFromBeginning = new RegExp("^" + searchFilter, "gi");
  const matchAnywhere = new RegExp(searchFilter, "gi");

  const mappedBooks = _(books)
    .filter(function filterBookList(book) {
      //const lastChapterDate = moment(book.lastChapterDate, "YYYY-MM-DDTHH:mm:ss.SSSZ");
      if(dateFilter && !moment(book.lastChapterDate).isSameOrAfter(today, dateFilter)) {
        return false;
      }

      if(typeof searchFilter === "boolean") { return searchFilter; }

      if(typeof searchFilter === "string") {
        // Assume that if a user only types in `n`, they want something that starts with `n`.
        // Cut-off point for filtering from the beginning is 3 characters.
        if(searchFilter.length <= 3) {
          return Boolean(book.title.match(matchFromBeginning));
        } else {
          return Boolean(book.title.match(matchAnywhere));
        }
      }
      return false;
    })
    .sortBy(book => -book.lastChapterDate )
    .map(function createBookListItem(book) {
      return <BookListItem key={book.id} book={book} />;
    })
    .value();

  return (
    <ul className={combine("book-list", className)}>
      {mappedBooks.length ? mappedBooks : <h3 className={"book-list--empty"}>No Manga</h3>}
    </ul>
  );
};

BookList.propTypes = {
  books: React.PropTypes.object.isRequired
};

BookList.defaultProps = {
  searchFilter: null,
  dateFilter: null
};

export default BookList;