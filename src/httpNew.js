const http = require('http')

const server = http.createServer((req, res) => {
  //   console.log({ req })
  if (req.url === '/') {
    res.end('welcome to home page!')
  } else if (req.url === '/profile') {
    res.end('welcome to profile page!')
  } else {
    res.end('<h1>Sorry, The page you are looking for is NOT FOUND!</h1>')
  }
})

server.listen(3000, () => {
  console.log(`server is listening to https://localhost:3000`)
})
