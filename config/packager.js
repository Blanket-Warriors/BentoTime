var path = require("path");
var package = require("../package.json");
var packager = require("electron-packager");
var context= path.resolve(__dirname, "../");

var options = {
	overwrite: true,
	name: "AWESOM-O",
	"app-version": package.version,
	dir: path.join(context, "public"),
	out: path.join(context, "public/packages")
};

switch(process.env["PLATFORM"]) {
	case "win32":
		Object.assign(options, {
			icon: path.join(context, "public/assets/icon.ico"),
			platform: win32,
			arch: ia32,
			asar: true
		});
		break;

	case "linux":
		Object.assign(options, {
			icon: path.join(context, "public/assets/icon.png"),
			platform: linux,
			arch: "x64",
			prune: true
		});
		break;

	case "macos":
	default:
		Object.assign(options, {
			icon: path.join(baseDir, "public/assets/icon.icns"),
			platform: "darwin",
			arch: "x64"
		});
		break;
};

packager(options, function () {
	console.log("Packaging complete!");
});
