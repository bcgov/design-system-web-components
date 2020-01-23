'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-eae88e05.js');
const utils = require('./utils-872e15ed.js');

const BcgovHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
        this.logo = "gov_bc_logo.svg";
    }
    componentWillLoad() {
        this.hasLogoSlot = !!this.el.querySelector('[slot="logo"]');
    }
    componentDidRender() {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            utils.filterATags(element);
        });
    }
    getImage() {
        if ("" === this.logo) {
            return "";
        }
        else {
            let image = core.getAssetPath(`../../assets/${this.logo}`);
            return core.h("img", { src: image, alt: "Logo" });
        }
    }
    render() {
        return (core.h(core.Host, null, core.h("header", { class: "bcgov-header" }, core.h("div", { class: "banner" }, core.h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, this.hasLogoSlot ? core.h("slot", { name: "logo" }) : this.getImage()), core.h("div", { class: "hl" }, core.h("slot", { name: "headline" })), core.h("div", { class: "access" }, core.h("slot", { name: "hidden-link" })))), core.h("slot", null)));
    }
    static get assetsDirs() { return ["../../assets"]; }
    get el() { return core.getElement(this); }
};

exports.bcgov_header = BcgovHeader;
