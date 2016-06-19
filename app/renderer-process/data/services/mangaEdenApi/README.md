mangaEdenApi
============
[mangaEdenApi](./mangaEdenApi.js) sends api requests to the [Manga Eden Api](https://www.mangaeden.com/api). It sends requests using [isomorphic-fetch](../../../../documentation/Dependencies.md#isomorphic-fetch). It then formats the responses as either a [Library](../../models/Library), [Book](../../models/Book), or [Chapter](../../models/Chapter).

How to use
----------
There are a few basic functions exported by `mangaEdenApi.js`:

- **`getLibrary$([pageId])`**

  getLibrary is a function that takes an optional `pageId` (for paginated results), and responds with a promise containing a [Library](../../models/Library) created from mangaEden's "Manga List" API endpoint.

- **`getBook$(bookId)`**

  getBook is a function that takes in a `bookId` argument and responds with a promise containing a [Book](../../models/Book) created from mangaEden's "Manga info and chapters list" API endpoint.

- **`getChapter$(chapterid)`**

  getChapter is a function that takes in a `chapterId` argument and responds with a promise containing an array of [Chapters](../../models/Chapter) from mangaEden's "Chapter pages" API endpoint.

How it works
------------
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

Here, we are exporting our `getBook$` request.  When we pass it the ID of a book, it gets formatted into a url string with an ES2015 [template string](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en).
