const { threadId, parentPort } = require("worker_threads");

parentPort.addListener("message", (message) => {
	for (let i = 0; i < message; i++) {
		console.info(`Thread-${threadId} Send message ${message}`);
		parentPort.postMessage(i);
	}

	parentPort.close();
});
