chapterActions
===========
ChapterActions help us format our data to be processed by our [chapterReducer](../../reducers/chapterReducer).

How to use
-----------
As actions are just used to format data for use in reducers, we should run them, and pass the formatted output to our chapterReducer. We need both a book and a chapter in order for our reducers to know what to update.
```js
import chapterActions from "renderer/data/actions/chapterActions";

// Set a chapter as viewed
dispatch(chapterActions.setChapterViewed(new Book(), new Chapter(), true));

// Try to fetch a book from an API
dispatch(chapterActions.fetchChapter(new Book(), new Chapter()));
```
