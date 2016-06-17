Book
----
A book is a single manga title. We are using the naming convention of `Book` because it is easier to understand the plural sense of the word and gives a bit more clarity of understanding the structure of everything.  A Book holds information such as titles, descriptions, and categories.  They also serve a container for Chapters.

```js
{
  title: "Book Title",
  image: "someUrlForAnImage",
  lastChapter: 324341234,
  ...
  chapters: []
}
```

Books can come from two sources.  They receive initial data from the `Fetch Library` action, and then are updated with more detailed information from the `Fetch Book` action.  This is specified by the `lastUpdated` property, which will remain undefined until a `Book` is updated by `bookReducer.js`.
