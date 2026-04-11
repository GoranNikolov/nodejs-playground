const http = require("http");
const routes = require("./routes");

// Display exported text from routes module
// This demonstrates how modules export and share data
console.log(routes.someText);

/**
 * Create HTTP server with custom request handler
 * The handler function processes all incoming HTTP requests
 * and determines how to respond based on the URL and method
 */
console.log("Hello world");
const server = http.createServer(routes.handler);

server.listen(3000);
