const http = require('http')
const url = require('url')

// const HTTP_METHODS = http.METHODS;
// const HTTP_STATUS_CODES = http.STATUS_CODES;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.statusMessage = 'OK'

  // console.log(req.url);
  const query = url.parse(req.url, true).query
  console.log({ query })

  // console.log(req.headers);
  // console.log(req.method);
  // console.log(req.rawHeaders);
  // console.log(res.getHeaderNames());
  // console.log(res.getHeader())
  // console.log(res.getHeaders());
  // res.statusMessage("OK");
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('custom_header', 'trail')
  res.end('Test Message')
  // res.end(JSON.stringify(HTTP_STATUS_CODES, null, "\t"));
})

server.listen(3000, 'localhost', () => {
  console.log('server is listening...')
})

// console.log({ server });

// console.log(HTTP_STATUS_CODES);

// console.log(http.globalAgent);

// http.request();

// http.get();
