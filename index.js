const http = require('http');

const hostname 	= '0.0.0.0';
const env 		=  process.env.NODE_ENV != "" ? process.env.NODE_ENV : "staging";
const port 		=  env == "staging" ? 9001 : 9002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});