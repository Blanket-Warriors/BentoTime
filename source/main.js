import { app, Menu, BrowserWindow, crashReporter } from "electron";
import createWindow from "modules/createWindow/createWindow.js";
import path from "path";

const environment = process.env["NODE_ENV"];
const isMac = process.platform === "darwin";

crashReporter.start({
  companyName: "Blanket Warriors",
  productName: "BentoTime",
  submitURL: "https://www.blanketwarriors.com/api/defects",
  autoSubmit: true
});

app.on("ready", createLauncherWindow);
app.on("window-all-closed", if (!isMac) app.quit());
