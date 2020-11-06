import { Host, h } from "@stencil/core";
export class BcgovSearch {
    constructor() {
        /** A number that represents mobile search breakpoint in px; */
        this.breakpoint = 0;
    }
    componentWillLoad() {
        const self = this;
        self.isSearchMobile();
        window.addEventListener("resize", function () {
            self.isSearchMobile();
        });
    }
    isSearchMobile() {
        if (window.innerWidth >= this.breakpoint) {
            if (!this.el.classList.contains("is-search-desktop")) {
                this.el.classList.add("is-search-desktop");
            }
        }
        else {
            this.el.classList.remove("is-search-desktop");
        }
    }
    onKeyPress(event) {
        if (event.which === 10 || event.which === 13) {
            event.target.closest('form').submit();
        }
    }
    render() {
        return (h(Host, { class: "bcgov-search" },
            h("div", { class: "search-container" },
                h("slot", null))));
    }
    static get is() { return "bcgov-search"; }
    static get properties() { return {
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
                "text": "A number that represents mobile search breakpoint in px;"
            },
            "attribute": "breakpoint",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "keypress",
            "method": "onKeyPress",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
