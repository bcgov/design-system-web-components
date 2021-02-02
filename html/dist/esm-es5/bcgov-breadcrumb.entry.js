import { r as registerInstance, h, H as Host, g as getElement } from './index-d7bc6b18.js';
import { b as breadCrumbElement } from './utils-c2c867e8.js';
var BcgovBreadcrumb = /** @class */ (function () {
    function BcgovBreadcrumb(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovBreadcrumb.prototype.componentWillLoad = function () {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            breadCrumbElement(element);
        });
    };
    BcgovBreadcrumb.prototype.render = function () {
        return (h(Host, { "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null)), h("slot", { name: "breadcrumb-extra" })));
    };
    Object.defineProperty(BcgovBreadcrumb.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return BcgovBreadcrumb;
}());
export { BcgovBreadcrumb as bcgov_breadcrumb };
