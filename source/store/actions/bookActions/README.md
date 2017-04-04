bookActions
===========
BookActions help us format our data to be processed by our [bookReducer](../../reducers/bookReducer).

How to use
-----------
As actions are just used to format data for use in reducers, we should run them, and pass the formatted output to our bookReducer.
```js
import bookActions from "renderer/data/actions/bookActions";

// Set a book as a bookmark
dispatch(bookActions.setBookmark(new Book(), true));

// Try to fetch a book from an API
dispatch(bookActions.fetchBook(new Book()));
```
