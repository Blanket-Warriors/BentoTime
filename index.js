'use strict';
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;

require('electron-debug')();
crashReporter.start();

var mainWindow = null;

const app = electron.app;
app.on('window-all-closed', function allWindowsAreClosed() {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function initializeElectron() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  if (process.env['NODE_ENV'] == 'development') {

    // in development, the webpack dev server serves resources from memory
    // http://goo.gl/SGwTdJ
    mainWindow.loadURL(`http://localhost:8080`);

  } else {
    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
  }

  mainWindow.on('closed', function exitApplication() {
    mainWindow = null;
  });
});
