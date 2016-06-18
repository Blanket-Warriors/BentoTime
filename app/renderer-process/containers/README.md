Containers
----------

Our containers serve as a link between the data in our store, and the views that are displayed to a user. These are the files that depend on the store, and contain all of our state-avoiding components. There are a few different kinds of files that we consider to be containers.

## Routes
[Routes](./Routes) is the single file that houses the rest of the containers. The router in [app.jsx](../app.jsx) uses this file to determine which view is shown.

## Layout
[Layout](./Layout) is a persistent layer that passes through our views. This means that any components housed inside Layout are getting displayed all the time.

## Views
Each of the views is a different page that we can point our browser to (notice names such as [NotFoundView](./NotFoundView) and [ChapterView](./ChapterView), and this makes perfect sense). These should mostly just be housing smaller components to do the heavy lifting in terms of viewing.
