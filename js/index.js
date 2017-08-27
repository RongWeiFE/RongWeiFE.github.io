(function() {
    'use strict';

    var app = angular
        .module('train',['ui.router']);
    app.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/doc1');
        $stateProvider.state({
            name: 'doc1',
            url: '/doc1',
            templateUrl: "./chapter1/doc.html"
        }).state({
            name: 'doc2',
            url: '/doc2',
            templateUrl: "./chapter2/doc.html"
        }).state({
            name: 'doc3',
            url: '/doc3',
            templateUrl: "./chapter3/doc.html"
        });
    });
    app.controller('trainController', function($scope,$http){

    });
})();