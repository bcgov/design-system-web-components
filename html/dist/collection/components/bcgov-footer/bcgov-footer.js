import { Host, h } from "@stencil/core";
export class BcgovFooter {
    constructor() {
        /** Alignment of menu */
        this.alignment = "left";
    }
    render() {
        const classes = "bcgov-footer" + " align-" + this.alignment;
        const props = { role: "footer", class: classes };
        return (h(Host, Object.assign({}, props),
            h("slot", null)));
    }
    static get is() { return "bcgov-footer"; }
    static get properties() { return {
        "alignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"left\" | \"right\"",
                "resolved": "\"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Alignment of menu"
            },
            "attribute": "alignment",
            "reflect": false,
            "defaultValue": "\"left\""
        }
    }; }
}
