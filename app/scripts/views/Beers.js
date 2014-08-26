define( function(require){
  'use strict';

  var Backbone = require('backbone');
  var beerTemplate = require('hbs!templates/beerPanel');

  var Beer = Backbone.View.extend({

    render: function(){
      this.$el.append(beerTemplate({name: 'Bud Light', image: 'http://eaglebevmt.com/wp-content/uploads/2012/11/budlight-platinum.png', description: 'A light, crisp pilsner', abv:'4.5', type:'Pilsner'}));
    }
  });

  return Beer;
});
