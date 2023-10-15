const net = require("net");

const client = net.createConnection({
	port: 4000,
	host: "localhost",
});

client.on("data", (data) => {
	console.info(`Receive data from server: ${data.toString()}`);
});

setInterval(() => {
	client.write(`Hello From Client! \r\n`);
}, 2000);
