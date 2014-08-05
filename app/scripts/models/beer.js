define( function(require){
  var Backbone = require('backbone');

  var Beer = Backbone.Model.extend({
    defaults:{
      name: "",
      image: "",
      description: "",
      abv: 4.5,
      type: ""
    }
  });

  return Beer;
});
