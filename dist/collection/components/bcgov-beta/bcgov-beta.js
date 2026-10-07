import { Host, h } from "@stencil/core";
export class BcgovBeta {
    content = "This Application is currently in Beta Phase";
    label = "Beta";
    stateContent = "";
    el;
    componentWillLoad() {
        this.stateContent = this.el.textContent || this.content;
        this.el.innerHTML = this.label;
    }
    render() {
        return (h(Host, { key: '24addbdeca5d4d1c24980254e5a26ad22ab01592', class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
    }
    static get is() { return "bcgov-beta"; }
    static get properties() {
        return {
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "content",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "\"Beta\""
            }
        };
    }
    static get states() {
        return {
            "stateContent": {}
        };
    }
    static get elementRef() { return "el"; }
}
