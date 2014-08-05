define( function(require){
  'use strict';

  var Backbone = require('backbone');
  var $ = require('jquery');

  var MainView = Backbone.View.extend({
    el: $('.wrapper'),
    render: function(){
      this.$el.append('<div>Enter some stuff here foo</div>');
    }
  });

  return MainView;
});
