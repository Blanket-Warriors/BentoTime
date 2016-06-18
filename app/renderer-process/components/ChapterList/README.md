ChapterList
===========
ChapterList takes in a book, and returns a list component that displays the information for those Chapters in the form of [ChapterListItems](../ChapterListItem).

![Bentotime](../../../../public/assets/screenshots/chapter-list.png)

How to use
----------
```js
import ChapterList from "app/components/ChapterList";

<ChapterList book={book} />
```

Props
-----
* `Chapters`: An object or array of [Chapters](../../data/models/Chapter)
