const buffer = Buffer.from("Albert Manuel Simbolon");

const bufferBase64 = buffer.toString("base64");
console.info(bufferBase64);

const convertToStringASCII = Buffer.from(bufferBase64, "base64");
console.info(convertToStringASCII.toString("hex"));

const convertToStringUTF8 = Buffer.from(bufferBase64, "base64");
console.info(convertToStringUTF8.toString());
