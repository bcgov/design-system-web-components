import { Host, h } from "@stencil/core";
import { breadCrumbElement } from "../utils/utils";
export class BcgovBreadcrumb {
    /** Breadcrumb seperator */
    el;
    componentWillLoad() {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            breadCrumbElement(element);
        });
    }
    render() {
        return (h(Host, { key: '35a7801b1542f1c86a0d4bb18e817ce7cd936813', "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" }, h("ol", { key: '5309360e717ece218387a7a00fbeff0360a02cc9', itemscope: true, itemtype: "http://schema.org/BreadcrumbList" }, h("slot", { key: '81227867ec4104f16c8ec407312e6316daf3f9ec' })), h("slot", { key: '75df1a38a168fc1d8c95d2c9f3ab031f910b3969', name: "breadcrumb-extra" })));
    }
    static get is() { return "bcgov-breadcrumb"; }
    static get elementRef() { return "el"; }
}
