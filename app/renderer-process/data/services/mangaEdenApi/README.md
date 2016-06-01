mangaEdenApi
=============

[mangaEdenApi](./mangaEdenApi.js) sends api requests to the [Manga Eden Api](https://www.mangaeden.com/api). It sends requests using the [Superagent](https://github.com/visionmedia/superagent) http tool wrapped as an observable with [RxJS](https://github.com/Reactive-Extensions/RxJS). It then formats the responses as either a [Library](), [Book](), or [Chapter]().


#### How to use

There are a few basic functions exported by `mangaEdenApi.js`.

- `getLibrary$([pageId])`
  A function that takes an optional pageId (for paginated results), and responds with an observable containing a [Library]()

- `getBook$(bookId)`
  A function that takes in a `bookId` argument and responds with an observable containing a [Book]().

- `getChapter$(chapterid)`
  A function that takes in a `chapterId` argument and responds with an observable containing an array of [Chapters]()

#### How it works

The flow of a generic request is in our `getData` function:

```js
function getData(url, callback) {
  return request
    .get(url)
    .end((error, { body = {} }) => {
      return callback(error, body);
    });
}
```

Using Superagent's `request`, we send a get request to whatever url we want, and when it returns a response, we fire a callback function, giving it any error that could have resulted, as well as the body of our response (that defaults to an empty object if it doesn't exist).

Superagent defaults to a promise-style way of handling data, but because we're wrapping it as an observable, we choose to ignore this and instead just manually run a callback.  This results in a generic async function that sends an api request, and ends by passing that data via a callback.  This is the format that `Observable.fromNodeCallback` expects, so we can turn our request into an observable with:
`const getData$ = Observable.fromNodeCallback(getData);`

We use the resulting `getData$` as a base for our other requests.  An example of a request we could create with this is:

```
export function getBook$(bookID) {
  return getData$(`${baseHost}api/manga/${bookID}/`)
    .map(response => Book.createFromMangaEdenMangaApi(response, bookID));
}
```

Here, we are exporting our `getBook$` request.  When we pass it the ID of a book, it gets formatted into a url string with an ES2015 [template string](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en). The url responds with what we consider as a single-item observable and maps the response, formatting it to the way we would like to store it in our application.
