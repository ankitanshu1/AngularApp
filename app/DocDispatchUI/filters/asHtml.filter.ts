
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
module DocDispatchUi{
    "use strict"

    export function asHtml( $sce : ng.ISCEService){
        return (text : string) => {
            return $sce.trustAsHtml(text);
        }
    }
}