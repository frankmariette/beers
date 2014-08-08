/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        text: '../bower_components/requirejs-text/text',
        hbs: '../../<%= yeoman.app %>/bower_components/require-handlebars-plugin/hbs',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        mocha: '../bower_components/mocha/mocha',
        modernizr: '../bower_components/modernizr/modernizr',
        'require-handlebars-plugin': '../bower_components/require-handlebars-plugin/hbs',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-text': '../bower_components/requirejs-text/text',
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        underscore: {
            exports: '_'
        }
    },
    hbs: {
        helpers: true,
        i18n: false,
        templateExtension: 'hbs',
        partialsUrl: ''
    },
    packages: [

    ]
});

require([
    'backbone','router'
], function (Backbone, Router) {
    var appRouter = new Router();
    appRouter.initialize();
    Backbone.history.start();
});
