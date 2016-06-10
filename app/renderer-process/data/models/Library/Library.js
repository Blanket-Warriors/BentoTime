import { reduce } from "lodash";
import Book from "renderer/data/models/Book";
import moment from "moment";

class Library {
  constructor(initialData = {}) {
    this.isFetching = initialData.isFetching;
    this.lastUpdated = initialData.lastUpdated;
    this.totalBooks = initialData.totalBooks;
    this.books = initialData.books;

    if(typeof this.books == "object") {
      this.books = reduce(this.books, function(books, book, bookIndex) {
        books[bookIndex] = new Book(book);
        return books;
      }, {});
    }
  }
}

Library.createFromMangaEdenListApi = function({ manga, total }) {
  const books = reduce(manga, function(books, bookData) {
    const bookID = bookData.i;
    books[bookID] = Book.createFromMangaEdenListApi(bookData);
    return books;
  }, {});

  return new Library({
    books: books,
    totalBooks: total
  });
};

export default Library;
