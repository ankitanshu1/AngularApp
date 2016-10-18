var DocDispatchUi;
(function (DocDispatchUi) {
    var SearchController = (function () {
        function SearchController(dispatchService) {
            this.dispatchService = dispatchService;
        }
        SearchController.prototype.submit = function (address) {
            var _this = this;
            this.dispatchService.check(address).then(function (result) {
                _this.dispatchClients = result.data;
            })
                .catch(function (reason) {
                alert(reason.Message || reason.message);
            });
        };
        SearchController.$inject = ["dispatchService"];
        return SearchController;
    }());
    DocDispatchUi.SearchController = SearchController;
    angular
        .module("DocDispatchUi")
        .controller("SearchController", SearchController);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=search.js.map