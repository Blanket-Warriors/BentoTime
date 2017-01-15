import { app, shell, autoUpdater } from "electron";
import helpers from "main/modules/windowHelpers/windowHelpers.js";

const isMac = process.platform === "darwin";
const version = app.getVersion();
const name = app.getName();

const editMenu = {
  label: "Edit",
  submenu: [
    { label: "Undo",        role: "undo",       accelerator: "CmdOrCtrl+Z" },
    { label: "Redo",        role: "redo",       accelerator: "Shift+CmdOrCtrl+Z" },
    { type: "separator" },

    { label: "Cut",         role: "cut" ,       accelerator: "CmdOrCtrl+X" },
    { label: "Copy",        role: "copy",       accelerator: "CmdOrCtrl+C" },
    { label: "Paste",       role: "paste",      accelerator: "CmdOrCtrl+V" },
    { label: "Select All",  role: "selectall",  accelerator: "CmdOrCtrl+A"}
  ]
};

const viewMenu = {
  label: "View",
  submenu: [
    { label: "Reload", click: (item, window)=>{helpers.reloadPage(window);}, accelerator: "CmdOrCtrl+R" },
    {
      label: "Toggle Full Screen",
      click: (item, window)=>{helpers.toggleFullscreen();},
      accelerator: isMac ? "Ctrl+Command+F" : "F11"
    },
    { type: "separator" }
  ]
};

const windowMenu = {
  label: "Window",
  role: "window",
  submenu: [
    { label: "Minimize", role: "minimize", accelerator: "CmdOrCtrl+M" },
    { label: "Close",    role: "close",    accelerator: "CmdOrCtrl+W" }
  ]
};

const helpMenu = {
  label: "Help",
  role: "help",
  submenu: [
    {
      label: "Learn More",
      click() { shell.openExternal("https://github.com/Blanket-Warriors/BentoTime"); }
    },
    {
      label: "Toggle Developer Tools",
      accelerator: isMac ? "Alt+Command+I" : "Ctrl+Shift+I",
      click: (item, window)=>{helpers.openDevTools();}
    }
  ]
};

const macMainMenu = {
  label: app.getName(),
  submenu: [
    { label: `About ${name}`, role: "about" },
    { type: "separator" },

    { label: "Services", role: "services", submenu: [] },
    { type: "separator" },

    { label: `Hide ${name}`, role: "hide", accelerator: "Command+H" },
    { label: "Hide Others",           role: "hideothers", accelerator: "Command+Alt+H"},
    { label: "Show All",              role: "unhide" },
    { type: "separator" },

    { label: "Quit", accelerator: "Command+Q", click: () => app.quit()}
  ]
};

const updateItems = [
  { label: `Version ${version}`,  enabled: false },
  { label: "Checking for Update", enabled: false, key: "checkingForUpdate" },
  { label: "Check for Update",
    visible: false,
    key: "checkForUpdate",
    click(){ autoUpdater.checkForUpdates(); }
  },
  {
    label: "Restart and Install Update",
    enabled: true,
    visible: false,
    key: "restartToUpdate",
    click() { autoUpdater.quitAndInstall(); }
  }
];

export default { editMenu, windowMenu, macMainMenu, viewMenu, helpMenu, updateItems };
