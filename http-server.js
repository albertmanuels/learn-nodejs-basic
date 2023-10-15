const http = require("http");

const server = http.createServer((request, response) => {
	if (request.method === "POST") {
		request.addListener("data", (data) => {
			response.setHeader("Content-Type", "application/json");
			response.write(`${data}`);
			response.end();
		});
	} else {
		response.write("Hello World YEE!");
		response.end();
	}
});

server.listen(3000);
