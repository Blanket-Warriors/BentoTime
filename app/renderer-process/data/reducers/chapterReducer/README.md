Chapter Reducer
============
`chapterReducer` is a [reducer](http://rackt.org/redux/docs/basics/Reducers.html) nested within our [library](../libraryReducer) and [book](../bookReducer) reducers. Chapter reducer allows us to modify the state of a single book within our library. It takes actions from [chapterActions](../../actions/chapterActions) to build our chapter's state.

How to use
------------
Our chapter reducer handles any chapter actions. To use it, just pass it to the store on creation:
```js
import { createStore } from "redux";
import chapterReducer from "renderer/data/reducers/chapterReducer";

createStore(chapterReducer);
```

#### Action Types
- `SET_CHAPTER_VIEWED` is a [chapter action](../../actions/chapterActions) sent when we add a `viewed` property to our chapter
- `FETCH_CHAPTER_REQUEST` is a [chapter action](../../actions/chapterActions) sent when we start an api request
- `FETCH_CHAPTER_SUCCESS` is a [chapter action](../../actions/chapterActions) sent an api request responds with a positive status
- `FETCH_CHAPTER_FAILURE` is a [chapter action](../../actions/chapterActions) sent when an api responds with an error
