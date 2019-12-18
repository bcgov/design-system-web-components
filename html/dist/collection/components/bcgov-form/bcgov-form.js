import { Host, h } from "@stencil/core";
export class BcgovForm {
    render() {
        return (h(Host, { class: "bcgov-form" },
            h("div", null, "This is a form component"),
            h("slot", null)));
    }
    static get is() { return "bcgov-form"; }
}
