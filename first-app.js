const fs = require("fs");

fs.writeFileSync("hello.tex", "Hello is node.js");

// function rqListener(req, res) {
//   console.log(req.url, req.method, req.headers);
//   process.exit(); hard exiting the event loop (never to do)

//   res.setHeader("Content-Type", "text/html");
// }

// const server = http.createServer(rqListener);

const serverOne = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    }),
  );
});

serverOne.listen(3001);
