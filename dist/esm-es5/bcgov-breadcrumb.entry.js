import { r as registerInstance, h, H as Host, g as getElement } from './core-07a37eb8.js';
import { b as breadCrumbElement } from './utils-129bfbdc.js';
var BcgovBreadcrumb = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentWillLoad = function () {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            breadCrumbElement(element);
        });
    };
    class_1.prototype.render = function () {
        return (h(Host, { "aria-label": "Breadcrumb", role: "nav", class: "bcgov-breadcrumb" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null)), h("slot", { name: "breadcrumb-extra" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovBreadcrumb as bcgov_breadcrumb };
