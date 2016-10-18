
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />


 module  DocDispatchUi{
     "use strict";
     function routes($routeProvider: ng.route.IRouteProvider){
         routes.$inject=["$routeProvider"]
    $routeProvider
    .when("/search",{        
        templateUrl:"/DocDispatchUI/views/_search.html",
        controller:"SearchController",
        controllerAs:"vm"
    })
    .otherwise({
        redirectTo:"/search"})
     }

     

     angular.module("DocDispatchUi")
     .config(routes);
 }
