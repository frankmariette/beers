(function (exports) {

  "use strict";

  var mongoose = require('mongoose');

  var BeerSchema = mongoose.Schema({
    name: String,
    description: String,
    abv: Number,
    type: String
  });

  var Beer = mongoose.model('Beer', BeerSchema);

   exports.getAllBeers = function(req, res) {
    Beer.find(function (err, beers) {
      if (err) return console.error(err);
      res.send(beers);
    });
  };

  exports.addBeer = function(req, res){
    if (err) {return err};
    return res;
  }

  exports.init = function (app) {
    console.log(app.port);
  };



}(exports));
