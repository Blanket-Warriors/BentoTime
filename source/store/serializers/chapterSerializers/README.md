Chapter
========
A chapter is what holds our pages, and is the smallest piece of our models.

How to Use
----------
```js
import Chapter from "renderer/data/models/Chapter";
import { getChapter$ } from "renderer/data/services/mangaEdenApi";

var myChapter = new Chapter();
var myChapterWithArgs = new Chapter({
  title: "My Chapter Title,
  lastUpdated: null
});

// Should use built-in adapters for services of APIs
getChapter$()
  .then(function(chapter) {
    // chapter is already formatted as a new chapter
    myChapter = myChapter.merge(chapter);
  });
}
```

#### Methods
 * `createFromMangaEdenChapterApi`: Creates a new chapter from the page data given to us from the Chapter API endpoint
 * `createFromMangaEdenMangaApi`: Creates a new chapter from the precursory information about a chapter given to us by the Manga API. This includes our `id`, `number`, `releaseDate`, and `title`
 * `merge`: Merges two books together, assuming `this` to be the book being merged into, and any arguments to be the book to be merged. This returns a new Book instance

#### Properties
* `id`: Unique string representing the book
* `isFetching`: This is a boolean that is true if a request to an API has been sent, but has not returned yet
* `lastUpdated`: Unix timestamp representing the last time we received data about the chapter
* `number`: Int for the order of the chapters
* `pages`: An array of page objects. Each page has an `id`, `image` path, `width`, and `height`
* `title`: The string title of the chapter
* `viewed`: Boolean for whether a user has seen this chapter
