Layout
======
The Layout is a container that has two main goals:

#### 1. Translate Redux State into React Props
Since our views depend on parts of our Library and user, it simplifies our structure to have information coming from a single point, in this case the Layout. This is the only component that interacts with Redux to get Library information, and helps us transfer our data from our Store into props.

#### 2. Wrap our views
Layout is also the main layout of the application, and has all of the persistant views. Anything that stays on-screen at all times is nested within this container.  All of our routes are displayed through this container via `React.cloneElement`, which also passes down the props library, user, book, chapter, and page.

How to use
----------
Layout is meant to be used with Redux and as a wrapper of other components (more specifically with React-Router).

```js
import Layout from "app/components/Layout";

<Provider store={myStore}>
  <Layout>
    <ChildComponent />
  </Layout>
</Provider>
```

```js
<Layout />
```

The non-redux connected component is also exported as an `unconnected` property in the exported Class.

Props
------
* `dispatch`: Given to us by React-Redux, this allows us to dispatch actions to our Store.
* `library`: Our manga data as a Library model
* `params`: Given to us by React-Router, this gives us our url parameters
* `routing`: Given to us by React-Router-Redux, this gives us information about our route
* `user`: Determined by our User model, this gives us various information and settings related to our user.
