const http = require('http')
/*
// object req represents the incoming request--i.e.
//the client is requesting from the web browser your web page
so youll have information about the method and all kinds of useful stuff in that request object
//res means the response we are sending back

*/
const server = http.createServer((req, res) => {
  res.write('Welcome to our home page')
  res.end()
})

//say what port you are listening to
server.listen(5000)
