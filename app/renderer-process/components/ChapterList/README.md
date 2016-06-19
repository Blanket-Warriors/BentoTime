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

#### Props
* `book`: A book that contains chapters
* `className` (Optional): Any class name passed in will be attached to the component.

#### ClassNames
 * `.chapter-list`: Our main class
 * `.chapter-list__item`: An item in our chapter list
