import { Host, h } from "@stencil/core";
export class BcgovSearch {
    render() {
        return (h(Host, null,
            h("div", { class: "search-container" },
                h("slot", null))));
    }
    static get is() { return "bcgov-search"; }
    static get elementRef() { return "el"; }
}
