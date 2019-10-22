import { h } from "@stencil/core";
export class BcgovButton {
    constructor() {
        /** The action of the button. */
        this.link = "button";
        /** Add a callback to handle events */
        this.eventHandler = this.eventHandlerFunction;
    }
    eventHandlerFunction() { }
    buttonStyle() {
        let buttonStyle = "primary";
        if (undefined !== this.primary) {
            buttonStyle = "primary";
        }
        else if (undefined !== this.secondary) {
            buttonStyle = "secondary";
        }
        else if (undefined !== this.dark) {
            buttonStyle = "dark";
        }
        return buttonStyle + " bcgov-button";
    }
    componentDidRender() {
        this.eventHandler(this.el);
    }
    render() {
        if ("button" === this.link) {
            return (h("button", { class: this.buttonStyle() },
                h("slot", null)));
        }
        else {
            return (h("a", { class: this.buttonStyle(), href: this.link, role: "button" },
                h("slot", null)));
        }
    }
    static get is() { return "bcgov-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "link": {
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
                "text": "The action of the button."
            },
            "attribute": "link",
            "reflect": false,
            "defaultValue": "\"button\""
        },
        "eventHandler": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Add a callback to handle events"
            },
            "defaultValue": "this.eventHandlerFunction"
        },
        "primary": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Creates Primary button"
            },
            "attribute": "primary",
            "reflect": false
        },
        "secondary": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Creates Secondary button"
            },
            "attribute": "secondary",
            "reflect": false
        },
        "dark": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Creates Dark button"
            },
            "attribute": "dark",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
