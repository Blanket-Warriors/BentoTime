Img
=========

Img is a component to help us load images in a better way, and gives us flexibility to improve image handling in the future.


#### How to use:

```js
import Img from 'app/components/Img';

<Img
  src="assets/images/phant.svg"
  alt="Phant"
  fallback="assets/images/phant.png"
/>
```

#### Props

* `className`: We can add classes to an Img component
* `src`: The source of the image
* `fallback` (Optional): A backup image to load if the first fails
* `alt` (Optional): A caption for the image
