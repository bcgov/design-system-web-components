import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { f as filterATags } from './utils-923a28b7.js';
var BcgovHeader = /** @class */ (function () {
    function BcgovHeader(hostRef) {
        registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        this.logo = "gov_bc_logo.svg";
    }
    BcgovHeader.prototype.componentWillLoad = function () {
        this.hasLogoSlot = !!this.el.querySelector('[slot="logo"]');
    };
    BcgovHeader.prototype.componentDidRender = function () {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            filterATags(element);
        });
    };
    BcgovHeader.prototype.getImage = function () {
        if ("" === this.logo) {
            return "";
        }
        else {
            var image = getAssetPath("../../assets/" + this.logo);
            return h("img", { src: image, alt: "Logo" });
        }
    };
    BcgovHeader.prototype.render = function () {
        return (h(Host, null, h("header", { class: "bcgov-header" }, h("div", { class: "banner" }, h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, this.hasLogoSlot ? h("slot", { name: "logo" }) : this.getImage()), h("div", { class: "hl" }, h("slot", { name: "headline" })), h("div", { class: "access" }, h("slot", { name: "hidden-link" })))), h("slot", null)));
    };
    Object.defineProperty(BcgovHeader, "assetsDirs", {
        get: function () { return ["../../assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BcgovHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovHeader;
}());
export { BcgovHeader as bcgov_header };
