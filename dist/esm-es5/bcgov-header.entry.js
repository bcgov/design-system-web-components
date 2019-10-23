import { r as registerInstance, h, H as Host, g as getElement } from './core-5dc11fcc.js';
import { m as moveElement } from './utils-b5944213.js';
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
    Object.defineProperty(BcgovHeader, "style", {
        get: function () { return ".sc-bcgov-header-h{background-color:#036;background-color:var(--bcgov-blue-primary);border-bottom:2px solid var(--bcgov-yellow-primary);padding:8px 10%;color:#fff;color:var(--bcgov-white);min-height:65px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-bcgov-header-h, .sc-bcgov-header-h header.sc-bcgov-header{position:relative}.sc-bcgov-header-h a.sc-bcgov-header{color:#fff}.sc-bcgov-header-h a.sc-bcgov-header, .sc-bcgov-header-h a.sc-bcgov-header:active, .sc-bcgov-header-h a.sc-bcgov-header:focus, .sc-bcgov-header-h a.sc-bcgov-header:hover, .sc-bcgov-header-h a.sc-bcgov-header:visited{color:#fff;color:var(--bcgov-white);padding:4px}.sc-bcgov-header-h .banner.sc-bcgov-header{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:4px 0}.sc-bcgov-header-h .hl.sc-bcgov-header{margin-left:15px;font-size:1.1rem}.sc-bcgov-header-h .access.sc-bcgov-header{display:block;position:relative;margin-left:15px;height:50px;width:150px;font-size:.8rem}.sc-bcgov-header-h .access.sc-bcgov-header a.sc-bcgov-header{height:50px;max-width:150px;position:absolute;display:block;padding:5px;opacity:0}.sc-bcgov-header-h .access.sc-bcgov-header a.sc-bcgov-header:focus{opacity:1}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovHeader;
}());
export { BcgovHeader as bcgov_header };
