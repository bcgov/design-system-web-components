import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { f as filterATags } from './utils-923a28b7.js';
var BcgovHeader = /** @class */ (function () {
    function BcgovHeader(hostRef) {
        registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        this.logo = "gov_bc_logo.svg";
    }
    BcgovHeader.prototype.componentWillLoad = function () { };
    BcgovHeader.prototype.componentDidRender = function () {
        var self = this;
        [].forEach.call(this.el.querySelectorAll("*[aria]"), function (element) {
            element.classList.add("access");
        });
        [].forEach.call(this.el.querySelectorAll("img"), function (element) {
            var divTag = document.createElement("div");
            divTag.classList.add("banner");
            if (undefined !== self.href && "" !== self.href) {
                var atag = document.createElement("a");
                atag.classList.add("branding-logo");
                atag.setAttribute("aria-label", "branding logo");
                atag.setAttribute("href", self.href);
                atag.appendChild(element.cloneNode(true));
                divTag.appendChild(atag);
            }
            else {
                divTag.appendChild(element.cloneNode(true));
            }
            element.replaceWith(divTag);
        });
        [].forEach.call(this.el.querySelectorAll("*[aria] a"), function (element) {
            element.setAttribute("aria", "");
            filterATags(element);
        });
    };
    BcgovHeader.prototype.getImage = function () {
        if ("" === this.logo) {
            return "";
        }
        else {
            var image = getAssetPath("../../assets/" + this.logo);
            var markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return h("div", { class: "banner" }, markup);
        }
    };
    BcgovHeader.prototype.render = function () {
        return (h(Host, { class: "bcgov-header" }, h("header", null, this.getImage(), h("slot", null))));
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
