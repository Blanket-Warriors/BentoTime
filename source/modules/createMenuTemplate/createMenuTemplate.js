import { app, BrowserWindow, shell, autoUpdater } from "electron";
import submenus from "./submenus/submenus.js";

function addUpdateMenuItems(items, position) {
  items.splice.apply(items, [position, 0].concat(submenus.updateItems));
}

export default function createMenuTemplate() {
  const { editMenu, windowMenu, macMainMenu, viewMenu, helpMenu } = submenus;
  var template;

  if(process.platform === "darwin") {
    windowMenu.submenu.push({ type: "separator" });
    windowMenu.submenu.push({ label: "Bring All to Front", role: "front" });
    addUpdateMenuItems(macMainMenu.submenu, 1);

    template = [macMainMenu, editMenu, viewMenu, windowMenu, helpMenu];
  }

  if(process.platform === "win32") {
    addUpdateMenuItems(helpMenu, 0);
    template = [editMenu, viewMenu, windowMenu, helpMenu];
  }

  return template;
}
