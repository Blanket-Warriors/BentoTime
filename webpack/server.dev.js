import path from "path";
import express from "express";
import webpack from "webpack";
import { spawn } from "child_process";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "./webpack.renderer.js";
const argv = require("minimist")(process.argv.slice(2));

const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const devMiddleware = webpackDevMiddleware(compiler, {
	contentBase: path.join(config.context, "public"),
	hot: true,
	historyApiFallback: true,
	inline: true
	stats: { colors: true },
	noInfo: true,
	publicPath: config.output.publicPath,
});

app.use(devMiddleware);

app.use(webpackHotMiddleware(compiler));


const server = app.listen(PORT, "localhost", error => {
	if (error) {
		return console.error(error);
	}

	if (argv["start-hot"]) {
		spawn("npm", ["run", "start-hot"], { shell: true, env: process.env, stdio: "inherit" })
			.on("close", code => process.exit(code))
			.on("error", spawnError => console.error(spawnError));
	}

	console.log(`Listening at http://localhost:${PORT}`);
});

process.on("SIGTERM",function() {
	console.log("Stopping dev server");
	devMiddleware.close();
	server.close(function () {
		process.exit(0);
	});
});
