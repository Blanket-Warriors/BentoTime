Version 1.1
===========
##### Cleaning up the reader views

feature                       | Description
------------------------------|------------
**Hotkey Support**            | Users should be able to navigate the entire Bentotime with hotkeys
**Page-by-page Reading**      | Users should be able to see chapters at a time or pages at a time
**Better reading navigation** | We need to be able to jump between chapters from our chapter and page views.

Version 1.2
===========
##### Help users find manga to read

feature               | Description
----------------------|-------------
**Default View** | What shows up if a user hasn't typed anything in the search bar. Currently, this is bookmarks. It would be nice for users to also be able to see popular manga and suggestions to read
**Smarter Search**    | Users should be able to search through manga using other criteria other than just the manga title, including: genre, newest chapters, recently popular, etc.

Version 1.3
===========
##### Run Bentotime in the background to track updates

feature                 | Description
------------------------|-------------
**Performance**         | If this is to run as a background process, it needs to be efficient. We should switch to Immutable.js for performance improvements, since we deal with a lot of data, and the state is too large to be maintained with normal Javascript objects.
**Notifications**       | Bentotime should be able to run as a background process, and notify a user when a new chapter is released

Version 1.4
===========
##### Pre 2.0-stretch goals

feature                  | Description
-------------------------|------------
**Saving**               | Users should be able to save pages locally
**Paginated Search**     | Large search results should be paginated to prevent freezing up
**Interactive Tutorial** | Helping first-time users understand everything they can do.

Version 2.0+
============
##### The far future

feature                             | Description
------------------------------------|---------------
**Editing**                         | Users should be able to edit the pages of a manga that they read locally
**Multiple Sources**                | We should gather data on manga from as few as 3 difference sources.
**Tsukkomi**                        | Add the ability to interact with other readers via Tsukkomi and/or comments
**Sync user bookmarks/preferences** | Users should either be able to make an account and save preferences via a server of ours OR be able to export and import settings manually
