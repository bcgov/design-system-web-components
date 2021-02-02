import { Host, h } from "@stencil/core";
import { breadCrumbElement } from "../utils/utils";
export class BcgovBreadcrumb {
    componentWillLoad() {
        [].forEach.call(this.el.querySelectorAll("a, span"), function (element) {
            breadCrumbElement(element);
        });
    }
    render() {
        return (h(Host, { "aria-label": "Breadcrumb", role: "navigation", class: "bcgov-breadcrumb" },
            h("ol", { itemscope: true, itemtype: "http://schema.org/BreadcrumbList" },
                h("slot", null)),
            h("slot", { name: "breadcrumb-extra" })));
    }
    static get is() { return "bcgov-breadcrumb"; }
    static get elementRef() { return "el"; }
}
