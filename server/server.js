var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    errorhandler = require('errorhandler'),
    routes = require('./routes'),
    app = express();

var env = process.env.NODE_ENV || 'development';

app.use(express.static(__dirname + '../app'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


if (env === 'development'){
  app.use(errorhandler());
}


routes.init(app);

app.get('/', function(req,res){
  res.send('../app/index.html');
});

app.get('/beers', routes.getAllBeers);

app.post('/beers', function(req,res){
  // res.send(res);
  console.log(req.params);

})

mongoose.connect("127.0.0.1", "beers", 27017);

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");
