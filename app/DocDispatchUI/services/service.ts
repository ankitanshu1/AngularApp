
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module DocDispatchUi{
    export interface IDispatchService{
        check(address:string) : ng.IPromise<{}>;
    }

     class DispatchService implements IDispatchService{
        static $inject = ["http"];
        constructor(private $http : ng.IHttpService){
                
        }
      check(address:string) : ng.IPromise<{}>{
//console.log(this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address));
var test = this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
return test;
 
        }
    }

    angular.module("DocDispatchUi").service("dispatchService",['$http',DispatchService]);


}