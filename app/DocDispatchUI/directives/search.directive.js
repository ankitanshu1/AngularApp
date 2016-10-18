var DocDispatchUi;
(function (DocDispatchUi) {
    var EnterKeyPressDirective = (function () {
        function EnterKeyPressDirective() {
            this.restrict = "A";
            this.require = "?ngModel";
        }
        EnterKeyPressDirective.prototype.link = function ($scope, elm, attr, ngModel) {
            var element = angular.element(elm);
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    $scope.$apply(function () {
                        $scope.$eval(attr.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        };
        EnterKeyPressDirective.instance = function () {
            return new EnterKeyPressDirective();
        };
        return EnterKeyPressDirective;
    }());
    angular
        .module("DocDispatchUi")
        .directive("ngEnter", EnterKeyPressDirective.instance);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=search.directive.js.map