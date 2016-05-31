import { app, BrowserWindow, crashReporter } from "electron";
import path from "path";

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
    width: 1250,
    height: 850,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {"web-security": false}
  });

  if(environment === "development") {
    // Serve resources from memory if in development
    const port = 8080;
    win.loadURL(`http://localhost:${port}`);
    win.openDevTools();
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
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

