Reducers
--------
A [reducer](http://rackt.org/redux/docs/basics/Reducers.html) is a function that takes in an action and the current state. It then gives us a new state based off of those. It is essentially what will determine everything that is stored in our store.  `reducers.js` takes all of our reducers and combines them together. Using Redux's [combineReducers](http://rackt.org/redux/docs/api/combineReducers.html) helper function, we are combining three different reducers:

## Library Reducer
[libraryReducer](./libraryReducer) handles uses our all of the data associated with Manga. This includes the whole list of books, chapters, and pages. Anything that we access from ANY API is stored here. `libraryReducer` works using the nested [bookReducer](./bookReducer) and [chapterReducer](./chapterReducer).

## User Reducer
[userReducer](./userReducer) handles all of the data associated with a user. This includes a user's bookmarks, settings, etc.

## Route Reducer
`routeReducer` is given to us by [redux-simple-router](https://github.com/rackt/react-router-redux), and helps us read router information like `state.routing.location.pathname` from our store instead of from other state-generating devices. This lets us simplify the data flow of our application.
