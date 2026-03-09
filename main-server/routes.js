const fs = require("fs");

/**
 * REQUEST HANDLER FUNCTION
 *
 * This arrow function handles all incoming HTTP requests.
 * It checks the request URL and HTTP method to determine how to respond.
 *
 * @param {Object} req - The request object containing URL, method, headers, etc.
 * @param {Object} res - The response object used to send data back to client
 */
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" placeholder="Type your message..."><button type="submit">Send</button></form></body>',
    );
    res.write("</html>");
    // Always return after sending response to different routes
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    /**
     * DATA EVENT LISTENER
     * Called whenever data chunk arrives from the request body
     * This is how we handle streamed data (form submission)
     */
    req.on("data", (chunk) => {
      console.log("Received data chunk:", chunk);
      body.push(chunk);
    });

    /**
     * END EVENT LISTENER
     * Called when all data has been received
     * Now we can process the complete form data
     */
    return req.on("end", () => {
      // Combine all chunks into a single buffer
      const parseBody = Buffer.concat(body).toString();
      console.log("Complete form data:", parseBody);

      const message = parseBody.split("=")[1];

      /**
       * NOTE: Synchronous vs Asynchronous file writing
       * fs.writeFileSync("message.txt", message);  // AVOID - blocks event loop
       * fs.writeFile() is better - doesn't block other requests
       */

      // Write message to file asynchronously
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing file:", err);
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> My First Node.js Page </title></head>");
  res.write("<body><h1> Hello from My Node.js Server </h1></body>");
  res.write("</html>");
  res.end();
};

/**
 * MODULE EXPORTS
 */
module.exports = {
  handler: requestHandler,
  someText: "Sample exported data from the routes module",
};

/**
 * ALTERNATIVE EXPORT METHODS :
 *
 * Option 1 - Direct function export:
 * module.exports = requestHandler;
 *
 * Option 2 - Using exports (note: exports is a reference to module.exports):
 * exports.handler = requestHandler;
 * exports.someText = "Some text";
 */
