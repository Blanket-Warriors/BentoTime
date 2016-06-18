mangaEdenApi
------------
[mangaEdenApi](./mangaEdenApi.js) sends api requests to the [Manga Eden Api](https://www.mangaeden.com/api). It sends requests using [isomorphic-fetch](../../../../documentation/Dependencies.md#isomorphic-fetch). It then formats the responses as either a [Library](../../models/Library), [Book](../../models/Book), or [Chapter](../../models/Chapter).

## How to use
There are a few basic functions exported by `mangaEdenApi.js`:

- `getLibrary$([pageId])`
  A function that takes an optional pageId (for paginated results), and responds with an observable containing a [Library]()

- `getBook$(bookId)`
  A function that takes in a `bookId` argument and responds with an observable containing a [Book]().

- `getChapter$(chapterid)`
  A function that takes in a `chapterId` argument and responds with an observable containing an array of [Chapters]()

## How it works
The flow of a generic request is in our `getData` function:

```js
function getData(url) {
  return fetch(url)
    .then(function(response) {
      if(response.status >= 400) {
        throw new Error(response);
      }
      return response.json();
    });
}
```
We simply fire a fetch request using isomorphic-fetch, which returns a promise. We can they respond to any errors we encounter, and format a response in the form of a javascript object.

```
export function getBook$(bookId) {
  return getData(`${baseHost}api/manga/${bookId}/`)
    .then(response => {
      return Promise.resolve(Book.createFromMangaEdenMangaApi(response, bookId));
    });
}
```

Here, we are exporting our `getBook$` request.  When we pass it the ID of a book, it gets formatted into a url string with an ES2015 [template string](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en). The url responds with what we consider as a single-item observable and maps the response, formatting it to the way we would like to store it in our application.
