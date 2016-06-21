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
    } else {
      this.books = {};
    }
  }

  merge(libraryToMerge) {
    var nextLibrary = new Library(this);
    if(!libraryToMerge) {
      console.warn("Trying to merge with a non-existing library!");
      return nextLibrary;
    }

    Object.keys(this).forEach(function(propertyName) {
      var updateProperty = libraryToMerge[propertyName];
      var propertyExists = updateProperty !== undefined && updateProperty !== null;
      if(propertyName != "books" && propertyExists) {
        nextLibrary[propertyName] = updateProperty;
      }
    });

    if(typeof libraryToMerge.books == "object") {
      nextLibrary.books = reduce(libraryToMerge.books, (books, book, bookIndex) => {
        const prevBook = this.books[bookIndex];
        books[bookIndex] = prevBook ? prevBook.merge(new Book(book)) : new Book(book);
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
