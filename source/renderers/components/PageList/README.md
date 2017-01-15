PageList
===========
PageList takes in an array of pages, and returns a list of [PageListItems](../PageListItem).

![Bentotime](../../../../public/assets/screenshots/chapter-view.png)

How to use
----------
```js
import PageList from "app/components/PageList";

<PageList pages={[page1, page2, page3]} />
```

#### Props
* `pages`: An array of page objects.
* `className` (Optional): Any class name passed in will be attached to the component.

#### ClassNames
 * `.page-list`: Our main class
 * `.page-list__item`: An item in our page list
