var DocDispatchUi;
(function (DocDispatchUi) {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when("/search", {
            templateUrl: "/UI/DocDipatch/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: "/search" });
    }
    routes.$inject = ["$routeProvider"];
    angular.module("DocDispatchUi")
        .config(routes);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=app.route.js.map