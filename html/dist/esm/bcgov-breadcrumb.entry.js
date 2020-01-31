import { r as registerInstance, h, H as Host, g as getElement } from './core-d4bdadec.js';
import { b as breadCrumbElement } from './utils-462e2c77.js';

const BcgovBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            breadCrumbElement(element);
        });
    }
    render() {
        return (h(Host, { "aria-label": "Breadcrumb", role: "nav", class: "bcgov-breadcrumb" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null)), h("slot", { name: "breadcrumb-extra" })));
    }
    get el() { return getElement(this); }
};

export { BcgovBreadcrumb as bcgov_breadcrumb };
