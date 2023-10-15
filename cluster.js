const os = require("os");
const http = require("http");
const cluster = require("cluster");

if (cluster.isPrimary) {
	//jalankan worker
	for (let i = 0; i < os.cpus().length; i++) {
		cluster.fork();
	}

	cluster.addListener("exit", (worker) => {
		console.info(`Worker-${worker.id} is exit`);
		cluster.fork();
	});
}

if (cluster.isWorker) {
	const server = http.createServer((request, response) => {
		response.write(`Response from proccess ${process.pid}`);
		response.end();
		process.exit();
	});

	server.listen(3000);
}
