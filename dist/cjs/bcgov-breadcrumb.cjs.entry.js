'use strict';

var index = require('./index-rECYbytW.js');
var utils = require('./utils-CbGEIwKE.js');

const BcgovBreadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    componentWillLoad() {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            utils.breadCrumbElement(element);
        });
    }
    render() {
        return (index.h(index.Host, { key: '35a7801b1542f1c86a0d4bb18e817ce7cd936813', "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" }, index.h("ol", { key: '5309360e717ece218387a7a00fbeff0360a02cc9', itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, index.h("slot", { key: '81227867ec4104f16c8ec407312e6316daf3f9ec' })), index.h("slot", { key: '75df1a38a168fc1d8c95d2c9f3ab031f910b3969', name: "breadcrumb-extra" })));
    }
};

exports.bcgov_breadcrumb = BcgovBreadcrumb;
