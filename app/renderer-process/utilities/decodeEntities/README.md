decodeEntities
---------------
Decodes html entities in strings. Uses the browser to decode rather than using
a entity database like [he.js](https://github.com/mathiasbynens/he). `decodeEntities` is a function that has a closure over a new html page so a new one isn't created on each function call.

## How to use
```js
import decodeEntities from "app/renderer-process/utilities/decodeEntities";

var htmlEntities = "&ldquo;Hello&rdquo;"
var decoded = decodeEntities(htmlEntities);
```

## Resources
http://stackoverflow.com/questions/5796718/html-entity-decode/27385169#27385169
