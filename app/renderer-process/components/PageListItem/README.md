PageListItem
===========
PageListItem takes in information about a page, and displays an image.

How to use
----------
```js
import PageList from "app/components/PageList";

<PageListItem src="http://thepathtomyimage" id="page1" />
```

#### Props
* `src`: The url of the page image
* `id`: The id of the page
* `className` (Optional): Any class name passed in will be attached to the component.

#### ClassNames
 * `.Page-list-item`: Our main class
 * `.Page-list-item__image`: The page image
