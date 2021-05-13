const http = require("http");

const HOST_NAME = "127.0.0.1";
const SERVER_PORT = 8080;

const server = http.createServer((req, res) => {
  console.log({ req, res });
});

server.listen(SERVER_PORT, HOST_NAME, () => {
  console.log("server is listening...!");
});
