import { Host, h } from "@stencil/core";
export class BcgovForm {
    render() {
        return (h(Host, { className: "bcgov-form" },
            h("slot", null)));
    }
    static get is() { return "bcgov-form"; }
}
