import { app, ipcMain, BrowserWindow, crashReporter } from "electron";
import path from "path";

const appPath = app.getAppPath();
const environment = process.env["NODE_ENV"];

crashReporter.start({
  companyName: "Blanket Warriors",
  productName: "BentoTime",
  submitURL: "https://www.blanketwarriors.com/api/defects",
  autoSubmit: true
});

var win = null;

app.on("ready", function initializeElectron() {
  win = new BrowserWindow({
    width: 1100,
    height: 850,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {"web-security": false}
  });

  if(environment === "development") {
    // in development, the webpack dev server serves resources from memory
    // http://goo.gl/SGwTdJ
    const port = 8080;
    win.loadURL(`http://localhost:${port}`);
  } else {
    win.loadURL(`file://${appPath}/index.html`);
  }

  win.on("closed", function exitApplication() {
    win = null;
  });
});

app.on("window-all-closed", function allWindowsAreClosed() {
  if(process.platform !== "darwin") {
    app.quit();
  }
});

