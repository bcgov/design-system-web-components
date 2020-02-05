'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');
const utils = require('./utils-28b049f7.js');

const BcgovHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        /** Logo options -- might not work... */
        this.logo = "gov_bc_logo.svg";
    }
    componentWillLoad() { }
    componentDidRender() {
        const self = this;
        [].forEach.call(this.el.querySelectorAll("*[aria]"), function (element) {
            element.classList.add("access");
        });
        [].forEach.call(this.el.querySelectorAll("img"), function (element) {
            const divTag = document.createElement("div");
            divTag.classList.add("banner");
            if (undefined !== self.href && "" !== self.href) {
                const atag = document.createElement("a");
                atag.classList.add("branding-logo");
                atag.setAttribute("aria-label", "branding logo");
                atag.setAttribute("href", self.href);
                atag.appendChild(element.cloneNode(true));
                divTag.appendChild(atag);
            }
            else {
                divTag.appendChild(element.cloneNode(true));
            }
            //element.replaceWith(divTag);
            element.parentNode.replaceChild(divTag, element);
        });
        [].forEach.call(this.el.querySelectorAll("*[aria] a"), function (element) {
            element.setAttribute("aria", "");
            utils.filterATags(element);
        });
    }
    getImage() {
        if ("" === this.logo) {
            return "";
        }
        else {
            let image = core.getAssetPath(`./assets/${this.logo}`);
            let markup = core.h("img", { class: "header-logo", src: image, alt: "Logo" });
            if ("" !== this.href) {
                markup = (core.h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
            }
            return core.h("div", { class: "banner" }, markup);
        }
    }
    render() {
        return (core.h(core.Host, { class: "bcgov-header" }, core.h("header", null, this.getImage(), core.h("slot", null))));
    }
    static get assetsDirs() { return ["../../assets"]; }
    get el() { return core.getElement(this); }
};

exports.bcgov_header = BcgovHeader;
