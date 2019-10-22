import { Host, h } from "@stencil/core";
export class BcgovCallout {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "bcgov-callout"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["bcgov-callout.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bcgov-callout.css"]
    }; }
}
