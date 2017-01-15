const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const babelrc = require("../.babelrc");
const context = path.resolve(__dirname, "..");

const config = {
	context: context,

	resolve: {
		extensions: [ ".js", ".jsx", ".css", ".scss" ],
		alias: {
			root: context,
			test: path.join(context, "test"),
			public: path.join(context, "public"),
			config: path.join(context, "config"),
			source: path.join(context, "source"),
			main: path.join(context, "source/main-process"),
			renderer: path.join(context, "source/renderer-process"),
			utilities: path.join(context, "source/utilities")
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [ path.join(context, "source") ],
				enforce: "pre",
				loader: "eslint-loader",
				query: { configFile: path.join(context, ".eslintrc.js") }
			},
			{
				test: /\.jsx?$/,
				include: [ path.join(context, "source") ],
				loader: "babel-loader",
				options: babelrc
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: "style-loader", query: { sourceMaps: true } },
					{ loader: "css-loader",   query: { sourceMaps: true } },
					{ loader: "sass-loader",  query: { sourceMaps: true } }
				],
				include: [ path.join(context, "source") ]
			},
			{ test: /\.yaml$/, use: [ "json-loader", "yaml-loader" ], exclude: /node_modules/ },
			{ test: /\.json$/, loader: "json-loader" }
		]
	},

	plugins: [
		new CleanWebpackPlugin([ "public" ])
	]
};

switch(process.env["NODE_ENV"]) {
	case "test":
		Object.assign(config, {
			devtool: "source-map",
			externals: { electron: true }
		});
		break;

	case "production":
		config.plugins = config.plugins.concat([
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.NoErrorsPlugin(),
			new webpack.HotModuleReplacementPlugin()
		]);
		break;

	case "developement":
	default:
		Object.assign(config, {
			devtool: "#source-map"
		});
}

module.exports = config;
