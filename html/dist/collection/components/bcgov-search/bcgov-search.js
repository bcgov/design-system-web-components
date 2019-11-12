import { Host, h } from "@stencil/core";
export class BcgovSearch {
    render() {
        return h(Host, null);
    }
    static get is() { return "bcgov-search"; }
}
