import { h } from "@stencil/core";
export class BcgovSectionDivider {
    constructor() {
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    componentDidLoad() {
        this.inlineStyles = { height: this.thickness, margin: this.margins };
    }
    render() {
        return h("div", { class: "divider", style: this.inlineStyles });
    }
    static get is() { return "bcgov-section-divider"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["bcgov-section-divider.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bcgov-section-divider.css"]
    }; }
    static get properties() { return {
        "thickness": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "thickness",
            "reflect": false
        },
        "margins": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "margins",
            "reflect": false
        }
    }; }
}
