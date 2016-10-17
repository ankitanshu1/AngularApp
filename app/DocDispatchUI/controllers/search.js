var DocDispatchUi;
(function (DocDispatchUi) {
    var SearchController = (function () {
        function SearchController(dispatchService) {
            this.dispatchService = dispatchService;
            this.$inject = ["DispatchService"];
        }
        SearchController.prototype.submit = function (address) {
            this.dispatchService.check(address).then(function (result) {
            })
                .catch(function (reason) {
                alert(reason.Message || reason.message);
            });
        };
        return SearchController;
    }());
    DocDispatchUi.SearchController = SearchController;
    angular
        .module("DocDispatchUi")
        .controller("SearchController", SearchController);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=search.js.map