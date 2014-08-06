var http = require('http');
var mongoose = require('mongoose');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://localhost:3000');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Database connected!')
});
