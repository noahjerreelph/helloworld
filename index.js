const express 			    = require('express');
const app 				    = express();
const http 			        = require('http');
const server 				= http.Server(app);

const hostname 	= '0.0.0.0';
const port 		=  process.env.NODE_ENV == "production" ? 9001 : 9002;


app.get("/", (req, res) => {
      res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World from Village88!');
})

app.get("/subscribe", (req, res) => {
      res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Do you want to subscribe to Village88 Projects?');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
