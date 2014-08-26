var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    app = express();

app.configure(function () {
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '../app'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

routes.init(app);

app.get('/beers', routes.getAllBeers);

mongoose.connect("127.0.0.1", "beers", 27017);

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");
