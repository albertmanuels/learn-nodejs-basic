const { Console } = require("console");
const fs = require("fs");

const file = fs.createWriteStream("application.log");
const fileError = fs.createWriteStream("applicationErrorLog.log");

const log = new Console({
	stdout: file,
	stderr: fileError,
});

log.info("Hello World!");
log.error("Found Error!");
const person = {
	firstName: "Albert",
	lastName: "Manuel",
};

log.table(person);
