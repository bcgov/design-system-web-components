import { r as registerInstance, c as getAssetPath, h, H as Host, g as getElement } from './core-07a37eb8.js';
import { f as filterATags } from './utils-129bfbdc.js';
var BcgovHeader = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        /** Logo options -- might not work... */
        this.logo = "gov_bc_logo.svg";
    }
    class_1.prototype.componentWillLoad = function () { };
    class_1.prototype.componentDidRender = function () {
        var self = this;
        [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
            element.classList.add("access");
        });
        var $img = this.el.querySelectorAll("img");
        var divTag = document.createElement("div");
        var atag;
        divTag.classList.add("banner");
        [].forEach.call($img, function (element) {
            if (undefined !== self.href && "" !== self.href) {
                if (undefined === atag) {
                    atag = document.createElement("a");
                    atag.classList.add("branding-logo");
                    atag.setAttribute("aria-label", "branding logo");
                    atag.setAttribute("href", self.href);
                    divTag.appendChild(atag);
                }
                atag.appendChild(element.cloneNode(true));
            }
            else {
                divTag.appendChild(element.cloneNode(true));
            }
            //element.replaceWith(divTag);
            element.parentNode.replaceChild(divTag, element);
        });
        [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
            [].forEach.call(element.querySelectorAll("a"), function (element) {
                element.setAttribute("aria", "");
                filterATags(element);
            });
        });
    };
    class_1.prototype.getImage = function () {
        if ("" === this.logo) {
            return "";
        }
        else {
            var image = getAssetPath("./assets/" + this.logo);
            var markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return "";
            //return <div class="banner">{markup}</div>;
        }
    };
    class_1.prototype.render = function () {
        return (h(Host, { class: "bcgov-header" }, h("header", null, this.getImage(), h("slot", null))));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["../../assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovHeader as bcgov_header };
