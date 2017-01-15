const path = require("path");
const config = require("./config.base.js");
const context = config.context;
const testEnvironment = process.env["NODE_ENV"] === "test";

module.exports = Object.assign({}, config, {
	target: testEnvironment ? "node" : "electron-main",

	entry: path.join(context, "source/main-process/index.js"),

	output: {
		path: path.join(context, "public/build"),
		filename: "main.js"
	},

	node: { __dirname: false }
});
