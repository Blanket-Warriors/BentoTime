import { app, Menu, BrowserWindow, crashReporter } from "electron";
import createMenuTemplate from "./createMenuTemplate";
import path from "path";

const environment = process.env["NODE_ENV"];

crashReporter.start({
  companyName: "Blanket Warriors",
  productName: "BentoTime",
  submitURL: "https://www.blanketwarriors.com/api/defects",
  autoSubmit: true
});

app.on("ready", function onAppReady() {
  var win = new BrowserWindow({
    width: 1250,
    height: 850,
    frame: false,
    scrollBounce: true,
    titleBarStyle: "hidden",
    webPreferences: {"web-security": false}
  });

  if(environment === "development") {
    win.loadURL("http://localhost:8080"); // Serve resources from memory if in development
    win.openDevTools();
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  win.on("closed", function onWindowClosed() {
    win = null;
  });

  const template = createMenuTemplate();
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

app.on("window-all-closed", function onAppWindowsClosed() {
  if(process.platform !== "darwin") {
    app.quit();
  }
});

