const { threadId, Worker } = require("worker_threads");

const worker1 = new Worker("./worker.js");
const worker2 = new Worker("./worker.js");

worker1.addListener("message", (message) => {
	console.info(`Thread-${threadId} Receive from worker 1: ${message}`);
});

worker2.addListener("message", (message) => {
	console.info(`Thread-${threadId} Receive from worker 2: ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
