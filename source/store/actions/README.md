Actions
=======
Actions are the minimal representation of changes that can happen to our state. These files clearly define all the actions that can cause our state to change. We use both [actions](http://redux.js.org/docs/basics/Actions.html) and [async actions](http://redux.js.org/docs/advanced/AsyncActions.html) with thunk in our application.

How to Use
----------
The only requirement for an action is that it has an `ActionType` property that is not undefined.  The different constants that this property can represent are housed in our [ActionTypes](./ActionTypes) file.
