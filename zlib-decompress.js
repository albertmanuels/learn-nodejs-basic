const zlib = require("zlib");
const fs = require("fs");

const source = fs.readFileSync("zlib-compress.txt");
console.info("compressed: ", source);
const result = zlib.unzipSync(source);
console.info("decompressed: ", result.toString());

fs.writeFileSync("zlib-decompress.txt", result.toString());
