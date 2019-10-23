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
    static get style() { return ".sc-bcgov-header-h{background-color:#036;background-color:var(--bcgov-blue-primary);border-bottom:2px solid var(--bcgov-yellow-primary);padding:8px 10%;color:#fff;color:var(--bcgov-white);min-height:65px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-bcgov-header-h, .sc-bcgov-header-h header.sc-bcgov-header{position:relative}.sc-bcgov-header-h a.sc-bcgov-header{color:#fff}.sc-bcgov-header-h a.sc-bcgov-header, .sc-bcgov-header-h a.sc-bcgov-header:active, .sc-bcgov-header-h a.sc-bcgov-header:focus, .sc-bcgov-header-h a.sc-bcgov-header:hover, .sc-bcgov-header-h a.sc-bcgov-header:visited{color:#fff;color:var(--bcgov-white);padding:4px}.sc-bcgov-header-h .banner.sc-bcgov-header{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;padding:4px 0}.sc-bcgov-header-h .hl.sc-bcgov-header{margin-left:15px;font-size:1.1rem}.sc-bcgov-header-h .access.sc-bcgov-header{display:block;position:relative;margin-left:15px;height:50px;width:150px;font-size:.8rem}.sc-bcgov-header-h .access.sc-bcgov-header a.sc-bcgov-header{height:50px;max-width:150px;position:absolute;display:block;padding:5px;opacity:0}.sc-bcgov-header-h .access.sc-bcgov-header a.sc-bcgov-header:focus{opacity:1}"; }
};

exports.bcgov_header = BcgovHeader;
