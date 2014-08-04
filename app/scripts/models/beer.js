/*global Beers, Backbone*/

Beers.Models = Beers.Models || {};

(function () {
    'use strict';

    Beers.Models.Beer = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
