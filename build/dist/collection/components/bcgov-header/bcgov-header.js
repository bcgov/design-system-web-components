import { h, Host } from "@stencil/core";
import { moveElement } from "../utils/utils";
export class BcgovHeader {
    componentWillLoad() {
        this.aTags = this.el.querySelectorAll("a[aria]");
        this.imgTags = this.el.querySelectorAll("img");
        this.headlineTags = this.el.querySelectorAll("div");
    }
    componentDidRender() {
        const elements = [
            {
                current: this.aTags,
                container: this.el.querySelector(".access")
            },
            {
                current: this.imgTags,
                container: this.el.querySelector(".branding-logo")
            },
            {
                current: this.headlineTags,
                container: this.el.querySelector(".hl")
            }
        ];
        elements.map(item => {
            [].forEach.call(item["current"], function (element) {
                moveElement(element, item["container"]);
            });
        });
    }
    render() {
        return (h(Host, null,
            h("header", { class: "bcgov-header" },
                h("div", { class: "banner" },
                    h("a", { class: "branding-logo", href: "", "aria-label": "branding logo" }),
                    h("div", { class: "hl" }),
                    h("div", { class: "access" })))));
    }
    static get is() { return "bcgov-header"; }
    static get properties() { return {
        "href": {
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
            "attribute": "href",
            "reflect": false
        },
        "headline": {
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
            "attribute": "headline",
            "reflect": false
        },
        "aTags": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NodeList",
                "resolved": "NodeList",
                "references": {
                    "NodeList": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "imgTags": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NodeList",
                "resolved": "NodeList",
                "references": {
                    "NodeList": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "headlineTags": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "NodeList",
                "resolved": "NodeList",
                "references": {
                    "NodeList": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
