import { r as registerInstance, h, H as Host, g as getElement } from './core-10536731.js';
import { f as filterATags } from './utils-923a28b7.js';
var BcgovHeader = /** @class */ (function () {
    function BcgovHeader(hostRef) {
        registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
    }
    BcgovHeader.prototype.componentDidRender = function () {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            filterATags(element);
        });
    };
    BcgovHeader.prototype.render = function () {
        return (h(Host, null, h("header", { class: "bcgov-header" }, h("div", { class: "banner" }, h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, h("slot", { name: "logo" })), h("div", { class: "hl" }, h("slot", { name: "headline" })), h("div", { class: "access" }, h("slot", { name: "hidden-link" })))), h("slot", null)));
    };
    Object.defineProperty(BcgovHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovHeader;
}());
export { BcgovHeader as bcgov_header };
