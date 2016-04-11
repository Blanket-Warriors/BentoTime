"use strict";
const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;
const http = require("http");
const path = require("path");
const fs = require("fs");
crashReporter.start();

if(process.env["NODE_ENV"] === "development") {
  require("electron-debug")();
}

var mainWindow = null;

const app = electron.app;
app.on("window-all-closed", function allWindowsAreClosed() {
  if(process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", function initializeElectron() {
  var server = null;
  mainWindow = new BrowserWindow({width: 800, height: 600});

  if (process.env["NODE_ENV"] == "development") {

    // in development, the webpack dev server serves resources from memory
    // http://goo.gl/SGwTdJ
    const port = 8080;
    mainWindow.loadURL(`http://localhost:${port}`);

  } else {
    // This is a hack to let our router run correctly.
    // Eventually, we should probably load directly via:
    // mainWindow.loadURL(`file://${__dirname}/index.html`);
    const port = 9090;
    server = http.createServer(requestHandler).listen(port);
    mainWindow.loadURL(`http://localhost:${port}`);
  }

  mainWindow.on("closed", function exitApplication() {
    mainWindow = null;
    if(server) { server.close(); }
  });
});

function requestHandler(request, response) {
  var filePath;
  if(request.url.match(/build/)) {
    filePath = path.join(__dirname, request.url);
  } else {
    filePath = path.join(__dirname, "/index.html");
  };

  fs.readFile(filePath, function(error, contents) {
    if(error) {
      throw error;
    } else {
      response.end(contents);
    }
  });
};
