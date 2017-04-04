Library Reducer
============
`libraryReducer` is a [reducer](http://rackt.org/redux/docs/basics/Reducers.html) that allows us to modify our library's state. It takes actions from [libraryActions](../../actions/chapterActions) to build our chapter's state.

How to use
------------
Our chapter reducer handles any chapter actions. To use it, just pass it to the store on creation:
```js
import { createStore } from "redux";
import libraryReducer from "renderer/data/reducers/libraryReducer";

createStore(libraryReducer);
```

#### Action Types
- `FETCH_CHAPTER_REQUEST` is a [chapter action](../../actions/chapterActions) sent when we start an api request
- `FETCH_CHAPTER_SUCCESS` is a [chapter action](../../actions/chapterActions) sent an api request responds with a positive status
- `FETCH_CHAPTER_FAILURE` is a [chapter action](../../actions/chapterActions) sent when an api responds with an error
- [`BOOK`](../../actions/bookActions) and [`CHAPTER`](../../actions/chapterActions) actions are passed on to be handled by our [`bookReducer`(../bookReducer).
