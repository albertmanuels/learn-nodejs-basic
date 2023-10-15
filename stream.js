const fs = require("fs");

const writer = fs.createWriteStream("target.log");
writer.write("Albert ");
writer.write("Manuel");

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
	console.info(`Hello ${data.toString()}`);
});

writer.end();
