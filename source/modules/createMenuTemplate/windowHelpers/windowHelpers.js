import { BrowserWindow } from "electron";

function reloadPage(item, focusedWindow) {
  if(focusedWindow) {
    if(focusedWindow.id === 1) {
      closeSecondaryWindows();
    }
    focusedWindow.reload();
  }
}

function closeSecondaryWindows() {
  BrowserWindow.getAllWindows().forEach(function(win) {
    if(win.id > 1) {
      win.close();
    }
  });
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

export default {
  reloadPage,
  toggleFullscreen,
  openDevTools,
  closeSecondaryWindows
};
