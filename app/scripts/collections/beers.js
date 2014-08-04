/*global Beers, Backbone*/

Beers.Collections = Beers.Collections || {};

(function () {
    'use strict';

    Beers.Collections.Beers = Backbone.Collection.extend({

        model: Beers.Models.Beers

    });

})();
