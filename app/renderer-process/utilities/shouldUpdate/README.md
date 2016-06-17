shouldUpdate
------------
`shouldUpdate` is used to determine whether we should update one of our classes ([Chapter](../../data/models/Chapter), [Library](../../data/models/Library, or [Book](../../data/models/Book). It works by assuming certain date properties and formats, so we wouldn't expect this utility to be used outside those usecases.

## How to use:
```js
import Book from "app/renderer-process/data/models/Book";
import shouldUpdate from "app/renderer-process/utilities/shouldUpdate";

shouldUpdate(new Book()); // We'd expect a Boolean output from this
```
