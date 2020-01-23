import { r as registerInstance, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { b as breadCrumbElement } from './utils-923a28b7.js';
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
        return (h(Host, { "aria-label": "Breadcrumb", role: "nav", class: "bcgov-breadcrumb" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null)), h("slot", { name: "breadcrumb-extra" })));
    };
    Object.defineProperty(BcgovBreadcrumb.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovBreadcrumb;
}());
export { BcgovBreadcrumb as bcgov_breadcrumb };
