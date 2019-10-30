import { Host, h } from "@stencil/core";
export class BcgovSearch {
    render() {
        return (h(Host, null,
            h("button", null,
                h("slot", null))));
    }
    static get is() { return "bcgov-search"; }
    static get encapsulation() { return "shadow"; }
}
