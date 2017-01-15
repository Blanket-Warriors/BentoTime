var moduleNames = [
	"deserializeBook",
	"deserializeChapter",
	"deserializeLibrary"
];

moduleNames.forEach(function (name) {
	module.exports[name] = input => input;
});
