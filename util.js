const util = require("util");

const person = {
	firstName: "Albert",
	lastName: "Manuel",
};

console.info(util.format(`Person: %j`, person));
