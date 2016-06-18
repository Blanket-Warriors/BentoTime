Stubs
=====
As opposed to fixtures, which focus on data, Stubs should focus on fake functions. These are useful in that they let us focus on the features of a specific file, while stubbing out its dependencies. The files in this folder should focus on commonly stubbed functions, as we can use Sinon to stub out more test-by-test specific functions and methods.

How to use
----------
We have a few different global utilities to help us use Stubs:

1. `inject-loader`

Inject Loader gives us the ability to replace our imports with mock functionality. All we have to do is a few changes when we import our file so that we use our mock data instead:

##### myModule
This is the module that we want to test. Notice that it has a dependency on `my/dope/Dependency.js`. We don't want to test `myDependency` here, though! We want to test `myModule`! This is why we want to use Stubs.

```js
import myDependency from 'my/dope/Dependency.js';
export default myDependency();
```

##### Before Mocking
If we want to test `myModule` without stubbing, we would just import it and run it. sHowever if we don't stub myDependency, it will also run:

```js
import myModule from './somefolder/myModule.js';
expect(myModule()).to.equal(5); // myDependency is run when we use `myModule()`
```

##### After Mocking
```js
var myMockDependency = function myStubbedDependency() { return 'Just dun got STUBBED!'; }
var myModuleInjector = require('inject!./somefolder/myModule.js');
var myModule = layoutInjector({ 'my/dope/Dependency.js': myModeDependency });
expect(myModule()).to.equal('Just dun got STUBBED!'); // This is now passes
```

1. `Sinon`

[Sinon stubs](http://sinonjs.org/docs/#stubs) give our stubs a lot of extra functionality, such as making sure our stubs are called with the right parameters, the right amount of times, and things of this nature.
