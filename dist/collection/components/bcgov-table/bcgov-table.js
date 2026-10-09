import { Host, h } from "@stencil/core";
export class BcgovTable {
    /** Breakpoint at which the table turns into rows. */
    breakpoint = 960;
    /** The primary column. */
    primaryColumn;
    /** Shows header columns when not in table. */
    showColumnLabels;
    el;
    componentWillLoad() {
        this.isTable();
    }
    onWindowResize() {
        this.isTable();
    }
    isTable() {
        this.el.classList.toggle("is-table", window.innerWidth >= this.breakpoint);
    }
    render() {
        const tableClass = this.showColumnLabels
            ? "bcgov-table show-column-labels"
            : "bcgov-table";
        return (h(Host, { key: '6bc4ec3a77348faa490577c8805d35dd8130d8e3', class: tableClass, role: "list" }, h("slot", { key: '8217523bd365384274e074a43ba9e54f99647678' })));
    }
    static get is() { return "bcgov-table"; }
    static get properties() {
        return {
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
                    "text": "Breakpoint at which the table turns into rows."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "breakpoint",
                "defaultValue": "960"
            },
            "primaryColumn": {
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
                    "text": "The primary column."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "primary-column"
            },
            "showColumnLabels": {
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
                    "text": "Shows header columns when not in table."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-column-labels"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "onWindowResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
