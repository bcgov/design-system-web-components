import { Host, h } from "@stencil/core";
export class BcgovBeta {
    constructor() {
        this.content = "This Application is currently in Beta Phase";
        this.label = "Beta";
    }
    componentWillLoad() {
        this.content = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return h(Host, { "aria-label": this.content, "aria-role": "alert", tabindex: "0" });
    }
    static get is() { return "bcgov-beta"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["bcgov-beta.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bcgov-beta.css"]
    }; }
    static get properties() { return {
        "content": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "content",
            "reflect": false,
            "defaultValue": "\"This Application is currently in Beta Phase\""
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"Beta\""
        }
    }; }
    static get elementRef() { return "el"; }
}
