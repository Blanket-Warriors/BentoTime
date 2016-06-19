SearchBar
===========
SearchBar holds an input that spans the width of the screen.

How to use
----------
```js
import SearchBar from "app/components/SearchBar";

<SearchBar src="http://thepathtomyimage" id="page1" />
```

#### Props
* `className` (Optional): Any class name passed in will be attached to the component
* `onChange` (Optional): A function that runs whenever anything is typed
* `placeholder` (Optional): The placeholder text
* `type` (Optional): The type of input

#### ClassNames
 * `.search-bar`: Our main class
 * `.search-bar__input`: The page image
