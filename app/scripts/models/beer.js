define( function(require){
  'use strict';
  var Backbone = require('backbone');

  var Beer = Backbone.Model.extend({
    defaults:{
      name: '',
      image: '',
      description: '',
      abv: 4.5,
      type: ''
    }
  });

  return Beer;
});
