var DocDispatchUi;
(function (DocDispatchUi) {
    var DispatchService = (function () {
        function DispatchService($http) {
            this.$http = $http;
        }
        DispatchService.prototype.check = function (address) {
            return this.$http.get("");
        };
        DispatchService.$inject = ["http"];
        return DispatchService;
    }());
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=service.js.map