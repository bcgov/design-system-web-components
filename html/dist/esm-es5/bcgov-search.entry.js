import { r as registerInstance, h, H as Host, g as getElement } from './core-07a37eb8.js';
var BcgovSearch = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return (h(Host, null, h("div", { class: "search-container" }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovSearch as bcgov_search };
