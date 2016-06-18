BookListItem
============
BookListItem takes in a book, and displays data meant to be consumed in the form of a list.  It is used in the [BookList](../BookList) component.  It serves as a way to link to our BookView.

How to use
----------
```js
import BookListItem from "app/components/BookListItem";

<BookListItem key={key} book={book} />
```

Props
-----
* `book`: An single [Book](../../data/models/Book)
* `key`: Helps us keep track of a list of BookListItems
