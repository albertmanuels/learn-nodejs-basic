const process = require("process");

process.addListener("exit", (code) => {
	console.info(`telah exit with code ${code}`);
});

process.argv.push("Albert");
console.table(process.argv);

process.exit(1);

console.log("hELLO");
