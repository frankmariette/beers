define( function(require){
  var Backbone = require('backbone');
  var _  = require('underscore');
  var MainView = require('views/MainView');

  var router = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    initialize: function(options){
      this.$el = $('div.wrapper');
      Backbone.history.start();
    },
    home: function(){
      var mainView = new MainView();
      mainView.render();
    }
  });

  return router;
})
