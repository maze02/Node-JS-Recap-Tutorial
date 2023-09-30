const http = require('http')
/*
// object req represents the incoming request--i.e.
//the client is requesting from the web browser your web page
so youll have information about the method and all kinds of useful stuff in that request object
//res means the response we are sending back

*/
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page you're looking for </p>
  <a href="/">back home</a>
 `)
  }
  return
})

//say what port you are listening to
server.listen(5000)
