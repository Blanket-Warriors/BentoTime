import { assign, reduce } from "lodash";
import Book from "app/data/models/Book";
import moment from "moment";

const Library = function Library() {
  this.isFetching = false;
  this.lastUpdated = undefined;
  this.totalBooks = undefined;
  this.books = {};
};

Library.createFromMangaEdenListApi = function({ manga, total }) {
  const books = reduce(manga, function(books, bookData) {
    const bookID = bookData.i;
    books[bookID] = Book.createFromMangaEdenListApi(bookData);
    return books;
  }, {});

  return assign(new Library(), {
    books: books,
    totalBooks: total
  });
};

export default Library;
