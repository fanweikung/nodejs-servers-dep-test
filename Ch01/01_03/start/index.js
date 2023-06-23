const https = require("https");
const fs = require("fs");
const { createServer } = require("http");

createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("Hello World");
}).listen(3000);

console.log("web server is listening on 3000");
