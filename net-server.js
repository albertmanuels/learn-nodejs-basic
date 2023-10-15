const net = require("net");

const server = net.createServer((client) => {
	console.info("Client connection");

	client.addListener("data", (data) => {
		console.info(`Receive data ${data.toString()}`);
		client.write(`Hello from Server`);
	});
});

server.listen(4000, "localhost");
