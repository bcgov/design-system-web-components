'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-eae88e05.js');
const utils = require('./utils-34b36ad2.js');

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
        return (core.h(core.Host, { "aria-label": "Breadcrumb", role: "nav", class: "bcgov-breadcrumb" }, core.h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, core.h("slot", null)), core.h("slot", { name: "breadcrumb-extra" })));
    }
    get el() { return core.getElement(this); }
};

exports.bcgov_breadcrumb = BcgovBreadcrumb;
