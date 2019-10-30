'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-49a26586.js');
const utils = require('./utils-7586050f.js');

const BcgovHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** link for logo */
        this.href = "https://www2.gov.bc.ca/gov/content/home";
    }
    componentDidRender() {
        [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function (element) {
            utils.filterATags(element);
        });
    }
    render() {
        return (core.h(core.Host, null, core.h("header", { class: "bcgov-header" }, core.h("div", { class: "banner" }, core.h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, core.h("slot", { name: "logo" })), core.h("div", { class: "hl" }, core.h("slot", { name: "headline" })), core.h("div", { class: "access" }, core.h("slot", { name: "hidden-link" }))), core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_header = BcgovHeader;
