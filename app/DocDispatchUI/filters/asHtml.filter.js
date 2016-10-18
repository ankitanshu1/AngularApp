var DocDispatchUi;
(function (DocDispatchUi) {
    "use strict";
    function asHtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
    DocDispatchUi.asHtml = asHtml;
})(DocDispatchUi || (DocDispatchUi = {}));
//# sourceMappingURL=asHtml.filter.js.map