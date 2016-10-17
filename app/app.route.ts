
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />


 module  DocDispatchUi{
     "use strict";
     function routes($routeProvider: ng.route.IRouteProvider){
    $routeProvider
    .when("/search",{
        templateUrl:"/UI/DocDipatch/views/_search.html",
        controller:"SearchController",
        controllerAs:"vm"
    })
    .otherwise({
        redirectTo:"/search"})
     }

     routes.$inject=["$routeProvider"]

     angular.module("DocDispatchUi")
     .config(routes);
 }
