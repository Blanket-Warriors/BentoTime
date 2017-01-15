const path = require("path");
const config = require("./config.base.js");
const context = config.context;
const testEnvironment = process.env["NODE_ENV"] === "test";

module.exports = Object.assign({}, config, {
	target: testEnvironment ? "web" : "electron-renderer",

	entry: [
		"react-hot-loader/patch",
		path.join(context, "source/renderer-process/index.jsx")
	],

	output: {
		path: path.join(context, "public", "build"),
		publicPath: "/build/",
		filename: "renderer.js"
	}
});
