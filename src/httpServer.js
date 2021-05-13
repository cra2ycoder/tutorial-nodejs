/**
 * @description
 * http module for creating the node server
 */
const http = require("http");

/**
 * @description
 * node server port
 *
 */
const SERVER_PORT = 8080;

/**
 * @description
 * creating the server instance
 */
http
  .createServer((req, res) => {
    /**
     * @req => http.IncomingMessage
     * @res => http.ServerResponse
     */
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Hello, World!");
  })
  .listen(SERVER_PORT);
