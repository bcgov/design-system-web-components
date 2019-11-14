'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-630b4e33.js');
const utils = require('./utils-872e15ed.js');

const BcgovBreadcrumb = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            utils.breadCrumbElement(element);
        });
    }
    render() {
        return (core.h(core.Host, { "aria-label": "Breadcrumb", role: "nav" }, core.h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_breadcrumb = BcgovBreadcrumb;
