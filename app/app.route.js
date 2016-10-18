var DocDispatchUi;
(function (DocDispatchUi) {
    "use strict";
    function routes($routeProvider) {
        routes.$inject = ["$routeProvider"];
        $routeProvider
            .when("/search", {
            templateUrl: "/DocDispatchUI/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: "/search" });
    }
    angular.module("DocDispatchUi")
        .config(routes);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=app.route.js.map