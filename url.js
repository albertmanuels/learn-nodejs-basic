const { URL } = require("url");

const myweb = new URL("https://albertmanuel.com/blog");

myweb.host = "www.albert.com";
myweb.searchParams.append("tag", "react");

console.log(myweb.href);
console.log(myweb.protocol);
console.log(myweb.host);
console.log(myweb.searchParams);
console.log(myweb.pathname);
