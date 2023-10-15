import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name1, name2) => {
	console.log(`HEY ${name1}, kamu berusia ${name2}`);
});

emitter.on("hello", (name1, name2) => {
	console.log("Hello " + name1 + name2);
});

emitter.emit("hello", "albert", 25);
