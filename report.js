const process = require("process");

process.report.reportOnFatalError = true;
process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError() {
	throw new Error("Ups");
}

sampleError();
