/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _electron = __webpack_require__(1);
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var environment = process.env["NODE_ENV"];
	
	if (environment === "development") {
	  __webpack_require__(3)();
	} else {
	  _electron.crashReporter.start({
	    companyName: "Blanket Warriors",
	    productName: "BentoTime",
	    submitURL: "https://www.blanketwarriors.com/api/defects",
	    autoSubmit: true
	  });
	}
	
	var win = null;
	
	_electron.app.on("ready", function initializeElectron() {
	  win = new _electron.BrowserWindow({
	    width: 1100,
	    height: 850,
	    webPreferences: { "web-security": false }
	  });
	
	  if (environment === "development") {
	    // in development, the webpack dev server serves resources from memory
	    // http://goo.gl/SGwTdJ
	    var port = 8080;
	    win.loadURL("http://localhost:" + port);
	  } else {
	    var appPath = _electron.app.getAppPath();
	    win.loadURL("file://" + appPath + "/index.html");
	  }
	
	  win.on("closed", function exitApplication() {
	    win = null;
	  });
	});
	
	_electron.app.on("window-all-closed", function allWindowsAreClosed() {
	  if (process.platform !== "darwin") {
	    _electron.app.quit();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	const electron = __webpack_require__(1);
	const localShortcut = __webpack_require__(4);
	const isDev = __webpack_require__(5);
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;
	const isOSX = process.platform === 'darwin';
	
	function devTools(win) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			win.toggleDevTools();
		}
	}
	
	function openDevTools(win, showDevTools) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			const mode = showDevTools === true ? undefined : showDevTools;
			win.webContents.openDevTools({mode});
		}
	}
	
	function refresh(win) {
		win = win || BrowserWindow.getFocusedWindow();
	
		if (win) {
			win.webContents.reloadIgnoringCache();
		}
	}
	
	module.exports = opts => {
		opts = Object.assign({
			enabled: null,
			showDevTools: false
		}, opts);
	
		if (opts.enabled === false || (opts.enabled === null && !isDev)) {
			return;
		}
	
		app.on('browser-window-created', (e, win) => {
			if (opts.showDevTools) {
				openDevTools(win, opts.showDevTools);
			}
		});
	
		app.on('ready', () => {
			// activate devtron for the user if they have it installed
			try {
				BrowserWindow.addDevToolsExtension(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"devtron\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).path);
			} catch (err) {}
	
			localShortcut.register(isOSX ? 'Cmd+Alt+I' : 'Ctrl+Shift+I', devTools);
			localShortcut.register('F12', devTools);
	
			localShortcut.register('CmdOrCtrl+R', refresh);
			localShortcut.register('F5', refresh);
		});
	};
	
	module.exports.refresh = refresh;
	module.exports.devTools = devTools;
	module.exports.openDevTools = openDevTools;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	const electron = __webpack_require__(1);
	const globalShortcut = electron.globalShortcut;
	const BrowserWindow = electron.BrowserWindow;
	const app = electron.app;
	const windowsWithShortcuts = new WeakMap();
	
	// a placeholder to register shortcuts
	// on any window of the app.
	const ANY_WINDOW = {};
	
	function isAccelerator(arg) {
	  return typeof arg === 'string';
	}
	
	function unregisterAllShortcuts(win) {
	  const shortcuts = windowsWithShortcuts.get(win);
	  shortcuts.forEach( sc =>
	    globalShortcut.unregister(sc.accelerator)
	  );
	}
	
	function registerAllShortcuts(win) {
	  const shortcuts = windowsWithShortcuts.get(win);
	
	  shortcuts.forEach( sc =>
	    globalShortcut.register(sc.accelerator, sc.callback)
	  );
	}
	
	function unregisterAll(win) {
	  if (win === undefined) {
	    // unregister shortcuts for any window in the app
	    unregisterAll(ANY_WINDOW);
	    return;
	  }
	
	  if (!windowsWithShortcuts.has(win)) {
	    return;
	  }
	
	  unregisterAllShortcuts(win);
	  windowsWithShortcuts.delete(win);
	}
	
	function register(win, accelerator, callback) {
	  if (arguments.length === 2 && isAccelerator(win)) {
	    // register shortcut for any window in the app
	    // win = accelerator, accelerator = callback
	    register(ANY_WINDOW, win, accelerator);
	    return;
	  }
	
	  if (windowsWithShortcuts.has(win)) {
	    const shortcuts = windowsWithShortcuts.get(win);
	    shortcuts.push({
	      accelerator: accelerator,
	      callback: callback
	    });
	  } else {
	    windowsWithShortcuts.set(win, [{
	      accelerator: accelerator,
	      callback: callback
	    }]);
	  }
	
	  const focusedWin = BrowserWindow.getFocusedWindow();
	  if ((win === ANY_WINDOW && focusedWin !== null) || focusedWin === win) {
	    globalShortcut.register(accelerator, callback);
	  }
	}
	
	function indexOfShortcut(win, accelerator) {
	  if (!windowsWithShortcuts.has(win)) {
	    return -1;
	  }
	
	  const shortcuts = windowsWithShortcuts.get(win);
	  let shortcutToUnregisterIdx = -1;
	  shortcuts.some((s, idx) => {
	    if (s.accelerator === accelerator) {
	      shortcutToUnregisterIdx = idx;
	      return true;
	    }
	    return false;
	  });
	  return shortcutToUnregisterIdx;
	}
	
	function unregister(win, accelerator) {
	  if (arguments.length === 1 && isAccelerator(win)) {
	    // unregister shortcut for any window in the app
	    // win = accelerator
	    unregister(ANY_WINDOW, win);
	    return;
	  }
	  const shortcutToUnregisterIdx = indexOfShortcut(win, accelerator);
	
	  if (shortcutToUnregisterIdx !== -1) {
	    globalShortcut.unregister(accelerator);
	    const shortcuts = windowsWithShortcuts.get(win);
	    shortcuts.splice(shortcutToUnregisterIdx);
	  }
	}
	
	function isRegistered(win, accelerator) {
	  if (arguments.length === 1 && isAccelerator(win)) {
	    // check shortcut for any window in the app
	    // win = accelerator
	    return isRegistered(ANY_WINDOW, win);
	  }
	
	  return indexOfShortcut(win, accelerator) !== -1;
	}
	
	
	app.on('browser-window-focus', (e, win) => {
	  if (windowsWithShortcuts.has(ANY_WINDOW)) {
	    registerAllShortcuts(ANY_WINDOW);
	  }
	
	  if (!windowsWithShortcuts.has(win)) {
	    return;
	  }
	
	  registerAllShortcuts(win);
	});
	
	app.on('browser-window-blur', (e, win) => {
	  if (windowsWithShortcuts.has(ANY_WINDOW)) {
	    unregisterAllShortcuts(ANY_WINDOW);
	  }
	
	  if (!windowsWithShortcuts.has(win)) {
	    return;
	  }
	
	  unregisterAllShortcuts(win);
	});
	
	module.exports = {
	  register: register,
	  unregister: unregister,
	  isRegistered: isRegistered,
	  unregisterAll: unregisterAll,
	  enableAll: registerAllShortcuts,
	  disableAll: unregisterAllShortcuts
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	module.exports = process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath);


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map