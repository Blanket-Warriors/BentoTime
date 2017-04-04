Library
=======
Our Library model helps us by maintaining a common format for how we store our Library data. There are a few properties in a Library:

How to Use
----------
```js
  import Library from "renderer/data/models/Library";
  import { getLibrary$ } from "renderer/data/services/mangaEdenApi";

  var myLibrary = new Library();
  var myLibraryWithArgs = new Library({
    isFetching: false,
    lastUpdated: null
  });

  // Should use built-in adapters for services of APIs
  getLibrary$()
    .then(function(library) {
      // library is already formatted as a new Library
      myLibrary = myLibrary.merge(library);
    });
```

#### Methods
 * `createFromMangaEdenListApi`: Creates a new library from the data received from Manga Eden.
 * `merge`: Merges two libraries together, assuming `this` to be the library being merged into, and any arguments to be the library to be merged. This returns a new Library instance.

#### Properties
 * `books`: An object that contains all of our books, sorted by bookId.
 * `isFetching`: This is a boolean that is true if a request to a library API has been sent, but has not returned yet.
 * `lastUpdated`: The unix timestamp representing the last time we received data about the library. This does NOT update when a book or chapter has updated, and only pertains to data about the library itself.
 * `totalBooks`: An integer representing the number of books we have.
