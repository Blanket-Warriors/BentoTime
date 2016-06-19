Img
====
Img is a component to help us load images in a better way, and gives us flexibility to improve image handling in the future.

How to use
-----------
```js
import Img from "app/components/Img";

<Img
  src="assets/images/phant.svg"
  alt="Phant"
  fallback="assets/images/phant.png"
/>
```

#### Props
* `src`: The source of the image
* `alt` (Optional): A caption for the image
* `className` (Optional): We can add classes to an Img component
* `fallback` (Optional): A backup image to load if the first fails

#### ClassNames
 * `.image`: Our main class
