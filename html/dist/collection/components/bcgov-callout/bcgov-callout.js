import { Component, Host, h } from "@stencil/core";
export class BcgovCallout {
    render() {
        return (h(Host, { class: "bcgov-callout" },
            h("slot", null)));
    }
    static get is() { return "bcgov-callout"; }
}
