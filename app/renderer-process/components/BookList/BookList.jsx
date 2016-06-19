import React from "react";
import _ from "lodash";
import moment from "moment";
import BookListItem from "renderer/components/BookListItem";
import combine from "renderer/utilities/combineClasses";

var BookList = function({ books, searchFilter, dateFilter, onlyShowBookmarks, className }) {
  const today = moment();
  const matchFromBeginning = new RegExp("^" + searchFilter, "gi");
  const matchAnywhere = new RegExp(searchFilter, "gi");

  const mappedBooks = _(books)
    .filter(function filterBooks(book) {
      if(!book.id) { return false; }
      if(onlyShowBookmarks) { return book.bookmarked; }

      if(dateFilter) {
        const lastChapterDate = moment.unix(book.lastChapterDate);
        const wasUpdatedRecently = !lastChapterDate.isSameOrAfter(today, dateFilter);
        return wasUpdatedRecently;
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
    .sortBy(book => -book.lastChapterDate)
    .map(function createBookListItem(book) {
      const isChapterBookmarked = book.chapters && book.bookmarked && book.chapters[0];
      const hasNewChapter = isChapterBookmarked && !book.chapters[0].viewed;
      return <BookListItem key={book.id} book={book} hasNewChapter={hasNewChapter} />;
    })
    .value();

  return (
    <ul className={combine("book-list", className)}>
      {mappedBooks.length ? mappedBooks : <h3 className={"book-list--empty"}>No Manga</h3>}
    </ul>
  );
};

BookList.propTypes = {
  books: React.PropTypes.object.isRequired,
  className: React.PropTypes.string,
  dateFilter: React.PropTypes.string,
  onlyShowBookmarks: React.PropTypes.bool
};

BookList.defaultProps = {
  books: {},
  className: "",
  dateFilter: null,
  onlyShowBookmarks: false,
  searchFilter: null
};

export default BookList;
