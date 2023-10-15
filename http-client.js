const http = require("http");

const endpoint = "http://localhost:3000";

const request = http.request(
	endpoint,
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	},
	(response) => {
		response.addListener("data", (data) => {
			console.info(`Receive: ${data.toString()}`);
		});
	}
);

const body = JSON.stringify({
	fistName: "Albert",
	lastName: "Manuel",
});

request.write(body);
request.end();
