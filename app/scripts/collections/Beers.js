define( function (require) {
  var Backbone = require('backbone');
  var Beer = require('models/beer')

  var Beers = Backbone.Collection.extend({
    url: '/beers',
    model: 'Beer'
  });

  return new Beers();
})
