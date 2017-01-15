import { USE_MOCKS } from "./constants.js";

var moduleNames = [
	"mangaEdenServices"
];

moduleNames.forEach(function exportModuleOrMock(moduleName) {
	var mockFolder = USE_MOCKS ? "__mocks__/" : "";
	var modulePath = `./${moduleName}/${mockFolder}${moduleName}.js`;
	__export(require(modulePath));
});

function __export(m) {
	for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
