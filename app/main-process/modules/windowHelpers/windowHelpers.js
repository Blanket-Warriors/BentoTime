import { BrowserWindow } from "electron";

function reloadPage(item, focusedWindow) {
  if(focusedWindow) {
    // on reload, start fresh and close any old
    // open secondary windows
    if(focusedWindow.id === 1) {
      BrowserWindow.getAllWindows().forEach(function(win) {
        if(win.id > 1) {
          win.close();
        }
      });
    }
    focusedWindow.reload();
  }
}

function toggleFullscreen(item, focusedWindow) {
  if(focusedWindow) {
    focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
  }
}

function openDevTools(item, focusedWindow) {
  if (focusedWindow) {
    focusedWindow.webContents.toggleDevTools();
  }
}

export default { reloadPage, toggleFullscreen, openDevTools };
