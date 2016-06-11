import { reduce, forEach } from "lodash";
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

  merge(updateLibrary) {
    var nextLibrary = new Library(this);
    if(!updateLibrary) {
      console.warn("Trying to merge with a non-existing library!");
      return nextLibrary;
    }

    if(typeof updateLibrary.books == "object") {
      nextLibrary.books = reduce(updateLibrary.books, (books, book, bookIndex) => {
        const prevBook = this.books[bookIndex];
        if(prevBook) {
          books[bookIndex] = prevBook.merge(new Book(book));
        } else {
          books[bookIndex] = new Book(book);
        }
        return books;
      }, {});
    }

    return nextLibrary;
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
