var http = require('http');
var events = require('events');

console.log('Hello Node');
http.createServer( function (req, res){
	res.writeHead(200, {'Contet-Type': 'text/plain'});
	res.end('Hello Node JS! test');
	console.log(req.connection);
	}
	
).listen(9292, 'localhost');
console.log('running server instance on ')