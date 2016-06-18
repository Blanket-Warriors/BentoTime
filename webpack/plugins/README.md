Plugins
=======

Directory Default File Plugin
-----------------------------
By default, the resolution path for webpack is to `index.js`. This plugin sets that default resolution path to the same name as the containing folder. For example...

```js
import app from `app/components/Button`;
```

now will first look for a file in:

```js
import app from `app/components/Button/Button.js`;
```

This plugin is almost directly copied from [Spalger's github](https://github.com/spalger/webpack-directory-name-as-main). We made some slight modifications to fix some issues we were having.