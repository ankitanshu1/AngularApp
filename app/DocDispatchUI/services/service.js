var DocDispatchUi;
(function (DocDispatchUi) {
    var DispatchService = (function () {
        function DispatchService($http) {
            this.$http = $http;
        }
        DispatchService.prototype.check = function (address) {
            var test = this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
            return test;
        };
        DispatchService.$inject = ["http"];
        return DispatchService;
    }());
    angular.module("DocDispatchUi").service("dispatchService", ['$http', DispatchService]);
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=service.js.map