
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module DocDispatchUi{


export interface IEnterKeyPressAttributes extends ng.IAttributes {
    ngEnter: string;
}
    class EnterKeyPressDirective implements ng.IDirective{
        restrict = "A";
        link($scope: ng.IScope, elm: Element, attr: IEnterKeyPressAttributes, ngModel: ng.INgModelController): void{
            var element = angular.element(elm);
            element.bind("keydown keypress", (event: JQueryEventObject ) =>
            {
                if(event.which === 13){
                    $scope.$apply(() =>{
                        $scope.$eval(attr.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }
        require ="?ngModel";
        
        
        static instance(): ng.IDirective {
        return new EnterKeyPressDirective();
        }
    }

angular
    .module("DocDispatchUi")
    .directive("ngEnter", EnterKeyPressDirective.instance );
 }

