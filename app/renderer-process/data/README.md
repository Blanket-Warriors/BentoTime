Data
====
This contains all the application parts of Bentotime that deal with data. Understanding the [Redux data flow](http://redux.js.org/docs/basics/DataFlow.html) is very helpful for understanding the layout of these files.

The data flow of BentoTime basically looks like this:

1. Get Initial State
2. Display State -> Fire Actions -> Update State (repeat until...)
3. Application Closes

In this README, we'll go over each of these steps and what they mean.

Get Initial State
-----------------
So we actually get our initial state from local storage in [renderer-process.jsx](../renderer-process.jsx). However after this, we use our [storeCreator](./storeCreator) and [library model](./models/Library) in order to create our initial state from the JSON object that is stored in local storage. Our store is where we store our state, and is how we receive actions to update the state.

Do repeat-y things
------------------
#### Display State
Displaying our State is also dependent on our [store](http://redux.js.org/docs/basics/Store.html). We have connected our [layout view](../containers/Layout) with [react-redux](https://github.com/reactjs/react-redux), which passes all the information we need from our store into props we can just pass through our components.

#### Fire Actions
This is where things get a bit more interesting, and happens when our store receives actions from dispatch functions. You'll see these throughout the components and containers of our application. Before a dispatch is fired, we also format the data by using one of our [action formatters](./actions). That's all these do! They just give us a standardized object with our changes, so that we know how to update our state. They help us by keeping these formats all in one place. Keep in mind that our action formatters also deal with asynchronous changes, so they should always be what call [services](./services), which just deal with how we interact with the outside world (aka api requests).

#### Update State
The last important point of our data flow is updating the state. We do this with [reducers](http://rackt.org/redux/docs/basics/Reducers.html). A reducer is just function that take in a formatted action and the current state, then gives us a new state based off of those. This, combined with our store, are the heart of any redux application.

Application Closes
---------------
We actually save the state occasionally when we update it, so our application doesn't need to do anything special when it closes. So nothing happens! Wew!
