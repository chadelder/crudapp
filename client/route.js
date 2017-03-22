var myCrud = angular.module('myCrud', ['ngRoute', 'ngResource']);

myCrud.config(function($routeProvider) {
    $routeProvider.when("/", {
        controller: 'crudController',
        templateUrl: "views/get.html"
    })
    .when("/post", {
        controller: 'crudController',
        templateUrl: "views/post.html"
    })
    .when("/getById/:id", {
        controller: 'crudController',
        templateUrl : "views/getById.html"

    })
    .when("/put/:id", {
        controller: 'crudController',
        templateUrl: "views/put.html"
    })
    .otherwise({redirectTo: '/'});
});
