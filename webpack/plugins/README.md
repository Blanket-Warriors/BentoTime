Plugins
--------

### Directory Default File Plugin
By default, the resolution path for webpack is to `index.js`. This plugin sets that default resolution path to the same name as the containing folder. For example...

```
import app from `app/components/Button`;
```

now will first look for a file in:

```
import app from `app/components/Button/Button.js`;
```

This plugin is directly copied from [Spalger's github](https://github.com/spalger/webpack-directory-name-as-main), with slight modifications to fix some issues we were having.