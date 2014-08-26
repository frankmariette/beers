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

  function getAllBeers(req, res) {
    Beer.find(function (err, beers) {
      if (err) return console.error(err);
      console.log(beers);
    });
  };

  function home(req,res){
    return "app/index.html";
  }

  exports.init = function (app) {
    app.get('/beers', getAllBeers);
  };

  exports.init = function (app) {
    app.get('/', home);
  }

}(exports));
