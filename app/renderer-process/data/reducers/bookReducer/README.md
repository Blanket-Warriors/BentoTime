Book Reducer
==========

`bookReducer` is a  [reducer](http://rackt.org/redux/docs/basics/Reducers.html) nested within our [libraryReducer](../libraryReducer). Book reducer allows us to keep track of the state of a single book within our library. It takes actions from [bookActions](../../actions/bookActions) to build our book's state, and passes on [chapterActions](../../actions/chapterActions) to be handled by our [chapterReducer](../chapterReducer).

#### Action Types that this Reducer Handles

- `FETCH_BOOK_REQUEST` is a [book action](../../actions/bookActions) sent when we start an api request
- `FETCH_BOOK_SUCCESS` is a [book action](../../actions/bookActions)sent an api request responds with a positive status
- `FETCH_BOOK_FAILURE` is a [book action](../../actions/bookActions) sent when an api responds with an error
- `FETCH_CHAPTER_XXXX` are [chapter actions](../../actions/chapterActions) that get passed on and handled by our [chapterReducer](../chapterReducer)

#### Book Action Usage Example

Say we fire an action `FETCH_BOOK_REQUEST` by calling our `fetchBook` method in [bookActions](../../actions/bookActions). This action is dispatched through our [libraryReducer](../libraryReducer), before being delegated to this file. Since the action type is `'FETCH_BOOK_REQUEST'`, it gets caught by this switch case:

```js
case ActionTypes.FETCH_BOOK_REQUEST:
  return merge({}, state, {
    isFetching: true
  });
```

Since we aren't actually receiving data with the `FETCH_BOOK_REQUEST` action, we just set the state of our book to `isFetching`, and return that result. All `merge` does is combine the state of an empty object (so we modify this object instead of our actual state), our current state (which defaults to initialState if we don't have one), and our new `isFetching` state.  The result is then returned, ending our reducer function.

When our request is complete, the `fetchBook` method will dispatch a `FETCH_BOOK_SUCCESS` or `FETCH_BOOK_FAILURE` action. If that action is indeed a success, it will again travel through the [libraryReducer](../libraryReducer), and end up getting caught by our book reducer:

```js
case ActionTypes.FETCH_BOOK_SUCCESS:
  return merge({}, state, action.book, {
    isFetching: false,
    lastUpdated: action.receivedAt
  });
```

This again merges our current state with an object.  However this time, we also merge in `action.book`, which is given to us by our action.  This is all of the information about our book, pre-formatted to be stored into our store. Convenient!  The result of this reducer is then used by our libraryReducer in order to get the state of the entire library.
