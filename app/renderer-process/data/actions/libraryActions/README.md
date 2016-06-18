libraryActions
===========
LibraryActions help us format our data to be processed by our [libraryReducer](../../reducers/libraryReducer).

How to use
-----------
As actions are just used to format data for use in reducers, we should run them, and pass the formatted output to our libraryReducer.
```js
import libraryActions from "renderer/data/actions/libraryActions";

// Try to fetch a library from an API
dispatch(libraryActions.fetchLibrary());

// Try to fetch a library page from an API
dispatch(libraryActions.fetchLibrary(1));
```
