define( function(require){
  'use strict';

  var Backbone = require('backbone');
  var Beers = require('collections/Beers');
  var $ = require('jquery');

  var MainView = Backbone.View.extend({
    el: $('.wrapper'),
    initialize: function(){
    },
    render: function(){
      console.log(Beers);
    }
  });

  return MainView;
});
