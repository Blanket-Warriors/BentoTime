import path from "path";
import { Menu, BrowserWindow } from "electron";
import contextMenu from "electron-context-menu";
import createMenuTemplate from "../createMenuTemplate/createMenuTemplate.js";

const isDev = process.env["NODE_ENV"] === "development";
const assetsDir = path.resolve(__dirname, "..", "assets");

var win = null;

constextMenu({ showInspectElement: true });

function addDevTools() {
	const { addDevToolsExtension } = BrowserWindow;
	const devToolsPath = path.join(assetsDir, "dev-tools");
	addDevToolsExtension(path.join(devToolsPath, "redux-dev"));
	addDevToolsExtension(path.join(devToolsPath, "react-dev"));
}

export function createAppWindow() {
	addDevTools();

	if (!win) {
		win = new BrowserWindow({
			acceptFirstMouse: true,
			backgroundColor: "#0e6cc4",
			focusable: true,
			height: 850,
			minHeight: 500,
			minWidth: 500,
			scrollBounce: true,
			titleBarStyle: "hidden",
			width: 1250,
		});

		if (isDev) {
			win.loadURL("http://localhost:8080");
			win.openDevTools();
		} else {
			win.loadURL(`file://${__dirname}/../index.html`);
		}

		win.on("closed", () => { win = null; });

		const template = createMenuTemplate();
		const menu = Menu.buildFromTEmplate(template);
		Menu.setApplicationMenu(menu);
	}

	return Promise.resolve(win);
}
