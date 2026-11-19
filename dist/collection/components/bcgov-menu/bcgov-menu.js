import { Host, h } from "@stencil/core";
let submenuSequence = 0;
export class BcgovMenu {
    /** Horizontal alignment of the top-level list. */
    alignment = "left";
    /** Viewport width at which the menu switches to desktop styling. */
    breakpoint = 0;
    /** Accessible name for the navigation landmark. */
    label = "Navigation";
    /** Apply primary header-navigation styling and a mobile close button. */
    primary = false;
    /** Use the compact sidebar layout. */
    sidebar = false;
    el = new HTMLElement();
    componentWillLoad() {
        this.updateDesktop();
        this.initializeDisclosures();
        this.el.querySelectorAll("a[active]").forEach((link) => {
            if (link.parentElement?.nodeName === "LI") {
                link.parentElement.classList.add("active");
            }
        });
    }
    onResize() {
        this.updateDesktop();
    }
    onClick(event) {
        const target = event.target;
        if (target.closest(".bcgov-primary-menu-close")) {
            this.el.classList.add("target-hidden");
            return;
        }
        const button = target.closest("button.disclosure-toggle");
        if (button && this.el.contains(button)) {
            this.setExpanded(button, button.getAttribute("aria-expanded") !== "true");
        }
    }
    onDocumentClick(event) {
        const target = event.target;
        if (target instanceof Node && this.el.contains(target)) {
            return;
        }
        this.el
            .querySelectorAll('button.disclosure-toggle[aria-expanded="true"]')
            .forEach((button) => this.setExpanded(button, false));
    }
    onFocusOut(event) {
        const nextTarget = event.relatedTarget;
        this.el
            .querySelectorAll('button.disclosure-toggle[aria-expanded="true"]')
            .forEach((button) => {
            const submenu = this.getSubmenu(button);
            const item = button.parentElement;
            if (submenu &&
                item &&
                nextTarget instanceof Node &&
                !item.contains(nextTarget)) {
                this.setExpanded(button, false);
            }
        });
    }
    onKeyDown(event) {
        const target = event.target;
        if (!target.matches("a, button") ||
            target.closest(".bcgov-primary-menu-close")) {
            return;
        }
        if (event.key === "Escape") {
            let item = target.closest("li");
            while (item && this.el.contains(item)) {
                const toggle = Array.from(item.children).find((child) => child.matches("button.disclosure-toggle"));
                if (toggle?.getAttribute("aria-expanded") === "true") {
                    event.preventDefault();
                    event.stopPropagation();
                    this.setExpanded(toggle, false);
                    toggle.focus();
                    return;
                }
                item = item.parentElement?.closest("li") ?? null;
            }
            return;
        }
        const toggle = target.matches("button.disclosure-toggle")
            ? target
            : null;
        const submenu = toggle ? this.getSubmenu(toggle) : null;
        if (event.key === "ArrowDown" &&
            submenu &&
            toggle?.getAttribute("aria-expanded") === "true") {
            const firstItem = this.getListItems(submenu)[0];
            if (firstItem) {
                event.preventDefault();
                firstItem.focus();
            }
            return;
        }
        const list = target.closest("ul");
        if (!list) {
            return;
        }
        const items = this.getListItems(list);
        const index = items.indexOf(target);
        if (index < 0) {
            return;
        }
        let destination;
        switch (event.key) {
            case "ArrowDown":
                destination = index + 1;
                break;
            case "ArrowUp":
                destination = index - 1;
                break;
            case "Home":
                destination = 0;
                break;
            case "End":
                destination = items.length - 1;
                break;
            default:
                return;
        }
        if (destination >= 0 && destination < items.length) {
            event.preventDefault();
            items[destination].focus();
        }
    }
    updateDesktop() {
        const isDesktop = window.innerWidth >= this.breakpoint;
        this.el.classList.toggle("is-desktop", isDesktop);
        if (this.primary) {
            document.body.classList.toggle("bcgov-menu-primary-is-desktop", isDesktop);
        }
    }
    initializeDisclosures() {
        this.el
            .querySelectorAll("li > ul")
            .forEach((submenu) => {
            const item = submenu.parentElement;
            const link = Array.from(item.children).find((child) => child.nodeName === "A");
            let button = Array.from(item.children).find((child) => child.matches("button.disclosure-toggle"));
            const generated = !button;
            if (!button) {
                button = document.createElement("button");
                button.className = "disclosure-toggle";
                button.type = "button";
                item.insertBefore(button, submenu);
            }
            const id = button.getAttribute("aria-controls") ||
                submenu.id ||
                `bcgov-menu-submenu-${++submenuSequence}`;
            submenu.id = id;
            button.type = "button";
            button.setAttribute("aria-controls", id);
            button.classList.toggle("has-label", !link);
            if (link && !button.hasAttribute("aria-label")) {
                button.setAttribute("aria-label", `Toggle ${link.textContent?.trim() || "submenu"}`);
            }
            else if (!link &&
                !button.hasAttribute("aria-label") &&
                (generated || !button.textContent?.trim())) {
                const label = Array.from(item.childNodes)
                    .filter((child) => child !== submenu && child !== button)
                    .map((child) => child.textContent?.trim())
                    .filter(Boolean)
                    .join(" ") || "submenu";
                button.setAttribute("aria-label", `Toggle ${label}`);
            }
            const expanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(expanded));
            submenu.hidden = !expanded;
            item.classList.toggle("expanded", expanded);
        });
    }
    getSubmenu(button) {
        const parent = button.parentElement;
        if (!parent || parent.nodeName !== "LI") {
            return null;
        }
        const submenu = Array.from(parent.children).find((child) => child.nodeName === "UL");
        return submenu ? submenu : null;
    }
    setExpanded(button, expanded) {
        const submenu = this.getSubmenu(button);
        if (!submenu) {
            throw new Error("Each disclosure-toggle button must share a list item with a nested ul.");
        }
        const list = button.parentElement.parentElement;
        this.el
            .querySelectorAll('button.disclosure-toggle[aria-expanded="true"]')
            .forEach((openButton) => {
            if (openButton !== button &&
                openButton.parentElement.parentElement === list) {
                this.setExpanded(openButton, false);
            }
        });
        button.setAttribute("aria-expanded", String(expanded));
        submenu.hidden = !expanded;
        button.parentElement.classList.toggle("expanded", expanded);
    }
    getListItems(list) {
        return Array.from(list.children).flatMap((item) => {
            if (item.nodeName !== "LI") {
                return [];
            }
            return Array.from(item.children).filter((child) => child.nodeType === 1 &&
                (child.matches("a") || child.matches("button.disclosure-toggle")));
        });
    }
    render() {
        return (h(Host, { key: '7be5fcd617d36d212acadbf642bc3807489d3d86' }, h("nav", { key: 'c0cec89e3a3c416319779a818138eb585b0f6c61', "aria-label": this.label }, this.primary && (h("button", { key: '913395147d53e809989e436fd1cd4e8f76b51a44', class: "bcgov-primary-menu-close", type: "button", "aria-label": "Close mobile navigation" }, h("span", { key: 'ad403657ace0023d46e02a3590ecbfc98cb5a09e', "aria-hidden": "true" }, "x"))), h("ul", { key: '7084b24e6b00211a8b41e5c63f9aa739e144479e', class: `align-${this.alignment}` }, h("slot", { key: '83f147f7378350b107f85acea04da3cd0fbb9e57' })))));
    }
    static get is() { return "bcgov-menu"; }
    static get properties() {
        return {
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
                    "text": "Horizontal alignment of the top-level list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "alignment",
                "defaultValue": "\"left\""
            },
            "breakpoint": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Viewport width at which the menu switches to desktop styling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "breakpoint",
                "defaultValue": "0"
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
                    "text": "Accessible name for the navigation landmark."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "\"Navigation\""
            },
            "primary": {
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
                    "text": "Apply primary header-navigation styling and a mobile close button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "primary",
                "defaultValue": "false"
            },
            "sidebar": {
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
                    "text": "Use the compact sidebar layout."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "sidebar",
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onResize",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "onDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "blur",
                "method": "onFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
