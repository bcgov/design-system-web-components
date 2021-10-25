import { r as registerInstance, h, e as Host, g as getElement } from './index-268dcccf.js';
import { b as breadCrumbElement } from './utils-3032e340.js';

let BcgovBreadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
      breadCrumbElement(element);
    });
  }
  render() {
    return (h(Host, { "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null)), h("slot", { name: "breadcrumb-extra" })));
  }
  get el() { return getElement(this); }
};

export { BcgovBreadcrumb as bcgov_breadcrumb };
