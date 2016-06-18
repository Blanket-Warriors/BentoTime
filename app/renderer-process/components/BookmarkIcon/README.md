Bookmark Icon
--------------
Bookmark Icon is a button to add a bookmark, as well as an icon to signify whether a book is, in fact, bookmarked.
Not Bookmarked:
![Bentotime](../../../../public/assets/screenshots/bookmarked-false.png)

Bookmarked:
![Bentotime](../../../../public/assets/screenshots/bookmarked-true.png)

## How to Use
Passing in the dispatcher and the related book are all we need to run the `BookmarkIcon` component:
```
import BookmarkIcon from "renderer/components/BookmarkIcon";

<BookmarkIcon
  book={book}
  dispatch={dispatch}
/>
```

## Props
* book
* dispatch
* className

* `className`: We can add classes to an BookmarkIcon component
* `dispatch`: The dispatcher for our store
* `book`: The book we are setting a bookmark on
