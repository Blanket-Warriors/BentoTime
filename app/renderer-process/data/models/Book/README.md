Book
=====
A book is a single manga title. We are using the naming convention of `Book` because it is easier to understand the plural sense of the word and gives a bit more clarity of understanding the structure of everything.  A Book holds information such as titles, descriptions, and categories.  They also serve a container for Chapters.

How to Use
----------
```js
import Book from "renderer/data/models/Book";
import { getBook$ } from "renderer/data/services/mangaEdenApi";

var myBook = new Book();
var myBookWithArgs = new Book({
  title: "My Book Title,
  lastUpdated: null
});

// Should use built-in adapters for services of APIs
getBook$()
  .then(function(book) {
    // book is already formatted as a new book
    myBook = myBook.merge(book);
  });
}
```

#### Methods
 * `createFromMangaEdenMangaApi`: Creates a new book from the detailed information given to us from the book API. Namely, this include chapter data (which is not given to us by the List API)
 * `createFromMangaEdenListApi`: Creates a new book from the precursory information about a book given to us by the List API. This includes things such as title, alias, id, and lastChapterDate
 * `merge`: Merges two books together, assuming `this` to be the book being merged into, and any arguments to be the book to be merged. This returns a new Book instance

#### Properties
* `alias`: This is the no-space and no-punctuation version of the title. This may eventually serve as the id of a book
* `artist`: String for who drew the book
* `author`: String for who wrote the book
* `bookmarked`: Boolean whether a book is bookmarked by a user
* `categories`: An array of category strings
* `chapters`: An array of chapter objects
* `created`: A unix timestamp for when this series started
* `description`: String description of the book
* `hits`: Number of times this book has been read
* `id`: Unique string representing the book
* `image`: Title image of the book
* `isFetching`: This is a boolean that is true if a request to an API has been sent, but has not returned yet
* `lastChapterDate`: Unix timestamp for the release date of the last chapter
* `lastUpdated`: Unix timestamp representing the last time we received data about the book. This does NOT update when a chapter has updated, and only pertains to data about the book itself
* `status`: Int for whether the series is still active
* `title`: The string title of the book
