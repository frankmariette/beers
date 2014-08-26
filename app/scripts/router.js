define( function(require){
  'use strict';
  var Backbone = require('backbone');
  var MainView = require('views/MainView');

  var router = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    initialize: function(){
      this.$el = $('div.wrapper');
    },
    home: function(){
      var mainView = new MainView();
      mainView.render();
    }
  });

  return router;
});
