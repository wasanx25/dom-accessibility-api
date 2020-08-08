const path = require("path");

module.exports = {
	coverageDirectory: path.resolve(__dirname, "../../coverage"),
	rootDir: path.resolve(__dirname, "../../sources"),
	testPathIgnorePatterns: [
		"/node_modules/",
		"/fixtures/",
		"/__tests__/helpers/",
		"__mocks__",
	],
	testURL: "http://localhost",
};