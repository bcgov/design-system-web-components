import { Host, h } from "@stencil/core";
export class BcgovForm {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "bcgov-form"; }
}
