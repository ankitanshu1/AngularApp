

/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module DocDispatchUi{
    
    export class DispatchClient{
    Title: string;
	Name: string;
	Domain: string;
	BreachDate: string;
	AddedDate: string;
	PwnCount: number;
	Description: string;
	DataClasses: string[];
	IsVerified: boolean;
	LogoType: string;
    }
   // angular.module("DocDispatchUi").config(DispatchClient);
}