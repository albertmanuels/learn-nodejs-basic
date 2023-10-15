const zlib = require("zlib");
const fs = require("fs");

const source = fs.readFileSync("zlib-compress.js");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.txt", result);
