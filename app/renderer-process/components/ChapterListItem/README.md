ChapterListItem
=========

ChapterListItem takes in a book and chapter, and displays data meant to be consumed in the form of a list.  It is used in the [ChapterList](../ChapterList) component.  It can also link us to a ChapterView to read a chapter.

#### How to use:

```js
import ChapterListItem from 'app/components/ChapterListItem';

<ChapterListItem key={key} book={book} />
```

#### Props

* `book`: An single [Book](../../data/models/Book)
* `chapter`: An single [Chapter](../../data/models/Chapter)
* `key`: Helps us keep track of a list of ChapterListItems
