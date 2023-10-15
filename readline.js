const process = require("process");
const readLine = require("readline");

const input = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});

input.question("siapa nama anda? : ", (name) => {
	console.info(`Hello ${name}`);
	input.close();
});
