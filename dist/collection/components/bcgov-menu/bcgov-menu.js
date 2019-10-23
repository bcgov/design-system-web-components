import { Host, h } from "@stencil/core";
import { menuElement } from "../../utils/utils";
export class BcgovMenu {
    constructor() {
        this.alignment = "left";
        this.menuId = "menu";
        this.isSubmenu = false;
        this.showSubmenu = (target, expanded) => {
            if (expanded) {
                target.classList.add("expanded");
            }
            else {
                target.classList.remove("expanded");
            }
            target.setAttribute("aria-expanded", expanded ? "true" : "false");
            target.setAttribute("tabindex", expanded ? "-1" : "0");
        };
    }
    getInstructions() {
        return (this.instructions ||
            `Use arrow keys to navigate between menuitems,
    spacebar to expand submenus, 
    escape key to close submenus, 
    enter to activate menuitems.`);
    }
    componentWillLoad() {
        this.isSubmenu = "UL" === this.el.parentElement.nodeName;
        [].forEach.call(this.el.querySelectorAll("a"), function (element) {
            menuElement(element);
        });
    }
    componentDidRender() { }
    onMouseEnter(ev) {
        const element = ev.target;
        this.showSubmenu(element, true);
    }
    onMouseLeave(ev) {
        const element = ev.target;
        this.showSubmenu(element, false);
    }
    render() {
        const alignment = "align-" + this.alignment;
        const instructionID = "bcgov-instructions-" + this.menuId;
        if (this.isSubmenu) {
            return (h(Host, { role: "menuitem", class: "expandable" },
                h("a", { href: this.href }, this.name),
                h("ul", { role: "menu" },
                    h("slot", null))));
        }
        else {
            if (undefined !== this.instructions) {
                return (h(Host, null,
                    h("ul", { role: "menubar", class: alignment, "aria-labelledby": instructionID },
                        h("slot", null)),
                    h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions)));
            }
            else {
                return (h(Host, null,
                    h("ul", { role: "menubar", class: alignment },
                        h("slot", null))));
            }
        }
    }
    static get is() { return "bcgov-menu"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["bcgov-menu.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bcgov-menu.css"]
    }; }
    static get properties() { return {
        "alignment": {
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
            "attribute": "alignment",
            "reflect": false,
            "defaultValue": "\"left\""
        },
        "allTags": {
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
        "menuId": {
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
            "attribute": "menu-id",
            "reflect": false,
            "defaultValue": "\"menu\""
        },
        "instructions": {
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
            "attribute": "instructions",
            "reflect": false
        },
        "isSubmenu": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-submenu",
            "reflect": false,
            "defaultValue": "false"
        },
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
        "name": {
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
            "attribute": "name",
            "reflect": false
        },
        "clone": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Node",
                "resolved": "Node",
                "references": {
                    "Node": {
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
    static get listeners() { return [{
            "name": "mouseenter",
            "method": "onMouseEnter",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "mouseleave",
            "method": "onMouseLeave",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
