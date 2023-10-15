function simplePromise() {
	return Promise.resolve("heloo");
}

const operating = await simplePromise();

console.info(operating);
