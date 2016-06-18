ChapterView
============
The Chapter View displays a whole chapter of a manga, and is used when a user's readmode is set for scroll.  If a user's readmode is `flip`, we instead use [PageView](../PageView).

![Bentotime](../../../../public/assets/screenshots/chapter-view.png)

As of now, this container is self-contained, only using components for the images and links.  However, in the near future, we will look to factor the scrolling list into a separate component, which will help us clean this up a little more.
