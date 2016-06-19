ChapterView
============
The Chapter View displays a whole chapter of a manga at the same time, and is used when a user wants to read in scroll mode.

![Bentotime](../../../../public/assets/screenshots/chapter-view.png)

How to use
----------
```js
import ChapterView from "renderer/components/ChapterView";

<ChapterView book={book} chapter={chapter} dispatch={dispatch} />
```

#### Props
 * `book`: We use this so that we can navigate back to the right book
 * `chapter`: This has our chapter information
 * `dispatch`: We need to pass this through in order to update our chapter to a `viewed` state
 * `className` (Optional): Any class name passed in will be attached to the component

#### ClassNames
 * `.chapter-view`: Our main class
 * `.chapter-view--loading`: This class is present when a chapter-view is loading
 * `.chapter-view__back`: This is our back button
 * `.chapter-view__pages`: This wrapes our pageList
