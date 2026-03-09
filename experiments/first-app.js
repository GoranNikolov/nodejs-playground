const http = require("http");
const fs = require("fs");

fs.writeFileSync("hello.tex", "Hello from Node.js");

/**
 * function rqListener(req, res) {
 *   // Log incoming request details
 *   console.log(req.url, req.method, req.headers);
 *
 *   // WARNING: process.exit() - Never use this in production!
 *   // It terminates the entire Node.js process immediately
 *   // process.exit();
 *
 *   // Set response header to indicate HTML content
 *   res.setHeader("Content-Type", "text/html");
 * }
 *
 * const server = http.createServer(rqListener);
 */

const serverOne = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(
    JSON.stringify({
      data: "Hello World!",
    }),
  );
});

serverOne.listen(3001);
