import { Host, h } from "@stencil/core";
export class BcgovFooter {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "bcgov-footer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["bcgov-footer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bcgov-footer.css"]
    }; }
}
