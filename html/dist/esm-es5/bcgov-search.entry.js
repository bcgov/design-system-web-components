import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
var BcgovSearch = /** @class */ (function () {
    function BcgovSearch(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovSearch.prototype.render = function () {
        return (h(Host, null, h("div", { class: "search-container" }, h("slot", null))));
    };
    Object.defineProperty(BcgovSearch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovSearch;
}());
export { BcgovSearch as bcgov_search };
