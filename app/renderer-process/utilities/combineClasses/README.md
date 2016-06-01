combineClasses
=========

This function is just for combining strings with spaces in the middle.  Currently, it limits the number of spaces in the middle to 1, which is slightly unnecessary, but looks nicer.


#### How to use:

```js
import combineClasses from 'app/utilities/combineClasses';

var myClasses = 'hello my'
combineClasses(myClasses, 'name', 'is', 'mushu');
```
