'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');
const utils = require('./utils-3876239a.js');

const BcgovHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.aTags = this.el.querySelectorAll("a[aria]");
        this.imgTags = this.el.querySelectorAll("img");
        this.headlineTags = this.el.querySelectorAll("div");
    }
    componentDidRender() {
        const elements = [
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
        elements.map(item => {
            [].forEach.call(item["current"], function (element) {
                utils.moveElement(element, item["container"]);
            });
        });
    }
    render() {
        return (core.h(core.Host, null, core.h("header", { class: "bcgov-header" }, core.h("div", { class: "banner" }, core.h("a", { class: "branding-logo", href: "", "aria-label": "branding logo" }), core.h("div", { class: "hl" }), core.h("div", { class: "access" })))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_header = BcgovHeader;
