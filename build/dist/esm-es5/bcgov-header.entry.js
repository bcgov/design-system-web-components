import { r as registerInstance, h, H as Host, g as getElement } from './core-5b448c27.js';
import { m as moveElement } from './utils-fda4c146.js';
var BcgovHeader = /** @class */ (function () {
    function BcgovHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovHeader.prototype.componentWillLoad = function () {
        this.aTags = this.el.querySelectorAll("a[aria]");
        this.imgTags = this.el.querySelectorAll("img");
        this.headlineTags = this.el.querySelectorAll("div");
    };
    BcgovHeader.prototype.componentDidRender = function () {
        var elements = [
            {
                current: this.aTags,
                container: this.el.querySelector(".access")
            },
            {
                current: this.imgTags,
                container: this.el.querySelector(".branding-logo")
            },
            {
                current: this.headlineTags,
                container: this.el.querySelector(".hl")
            }
        ];
        elements.map(function (item) {
            [].forEach.call(item["current"], function (element) {
                moveElement(element, item["container"]);
            });
        });
    };
    BcgovHeader.prototype.render = function () {
        return (h(Host, null, h("header", { class: "bcgov-header" }, h("div", { class: "banner" }, h("a", { class: "branding-logo", href: "", "aria-label": "branding logo" }), h("div", { class: "hl" }), h("div", { class: "access" })))));
    };
    Object.defineProperty(BcgovHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovHeader;
}());
export { BcgovHeader as bcgov_header };
