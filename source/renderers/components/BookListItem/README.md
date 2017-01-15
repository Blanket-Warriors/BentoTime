BookListItem
============
BookListItem takes in a book, and displays data meant to be consumed in the form of a list.  It is used in the [BookList](../BookList) component.  It serves as a way to link to our BookView.

How to use
----------
```js
import BookListItem from "app/components/BookListItem";

<BookListItem book={book} hasNewChapter={true} />
```

#### Props
 * `book`: An single [Book](../../data/models/Book)
 * `className` (Optional): Any class name passed in will be attached to the component.
 * `hasNewChapter` (Optional): A boolean value that describes whether our book has a new chapter

#### ClassNames
 * `.book-list-item`: Our main class
 * `.book-list-item__link`: The link that wraps our image
 * `.book-list-item__image`: The image of the book item
 * `.book-list-item__options`: Holds information about the book. Wraps the title.
 * `.book-list-item__title`: The title of the book
 * `.book-list-item__new-chapter`: The badge that shows when a book has a new chapter