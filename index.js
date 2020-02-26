const express 			    = require('express');
const app 				    = express();
const http 			        = require('http');
const server 				= http.Server(app);
const router 				= express.Router();

const hostname 	= '0.0.0.0';
const port 		=  process.env.NODE_ENV == "production" ? 9001 : 9002;



app.use(express.static(__dirname + "/assets"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


router.get("/", (req, res) => {
      res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World from Village88.');
})

router.get("/subscribe", (req, res) => {
      res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Do you want to subscribe to Village88 Projects?');
})

router.get("/unsubscribe", (req, res) => {
      res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Are you sure you want to unsubscribe?');
})

router.get("/games", (req, res) => {
     res.render('games');
})


app.use('/', router);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
