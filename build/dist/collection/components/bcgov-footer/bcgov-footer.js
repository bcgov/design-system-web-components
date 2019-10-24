import { Host, h } from "@stencil/core";
export class BcgovFooter {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "bcgov-footer"; }
}
