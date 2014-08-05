define( function(require){
  'use strict';

  var Backbone = require('backbone');
  var $ = require('jquery');
  var Handlebars = require('handlebars');
  var beerPanel = require('text!templates/beerPanel.hbs');
  var beerTemplate = Handlebars.compile(beerPanel);

  var MainView = Backbone.View.extend({
    el: $('.wrapper'),
    render: function(){
      this.$el.append(beerTemplate({name: 'Bud Light', image: 'http://eaglebevmt.com/wp-content/uploads/2012/11/budlight-platinum.png', description: 'A light, crisp pilsner', alcohol:'4.5%', type:'Pilsner'}));
    }
  });

  return MainView;
});
