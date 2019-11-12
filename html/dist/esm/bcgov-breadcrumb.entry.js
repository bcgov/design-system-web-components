import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
import { b as breadCrumbElement } from './utils-923a28b7.js';

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
        return (h(Host, { "aria-label": "Breadcrumb", role: "nav" }, h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", null))));
    }
    get el() { return getElement(this); }
};

export { BcgovBreadcrumb as bcgov_breadcrumb };
