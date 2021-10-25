'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56948967.js');
const utils = require('./utils-af2d3a52.js');

let BcgovBreadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
      utils.breadCrumbElement(element);
    });
  }
  render() {
    return (index.h(index.Host, { "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" }, index.h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, index.h("slot", null)), index.h("slot", { name: "breadcrumb-extra" })));
  }
  get el() { return index.getElement(this); }
};

exports.bcgov_breadcrumb = BcgovBreadcrumb;
