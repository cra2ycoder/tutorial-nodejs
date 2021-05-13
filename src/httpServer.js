/**
 * @description
 * creating the http server
 */
const http = require("http");

/**
 * @description
 * server port
 */
const SERVER_PORT = 8080;

/**
 * @description
 * initializing the server
 */
http
  .createServer((req, res) => {
    /**
     * @req = http.IncomingMessage
     * @res = http.ServerResponse
     */

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
  })
  .listen(SERVER_PORT);
