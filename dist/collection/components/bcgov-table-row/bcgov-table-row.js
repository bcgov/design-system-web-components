import { Host, h } from "@stencil/core";
export class BcgovTableRow {
    el;
    /** This column is the header. */
    header;
    componentDidLoad() {
        const table = this.el.parentElement;
        if (table?.nodeName !== "BCGOV-TABLE" || this.header) {
            return;
        }
        const primaryColumn = Number(table.getAttribute("primary-column"));
        if (!Number.isInteger(primaryColumn) || primaryColumn <= 0) {
            return;
        }
        const headerLabels = Array.from(table.querySelectorAll("bcgov-table-row[header], .header-row"))
            .filter((row) => row !== this.el)
            .flatMap((row) => Array.from(row.children, (cell) => (cell.textContent ?? "").replace(/[\n\r]+|[\s]{2,}/g, " ")));
        const cells = Array.from(this.el.children).filter((cell) => cell.tagName === "DIV");
        cells.forEach((cell, index) => {
            if (index + 1 === primaryColumn) {
                cell.classList.add("primary-column");
            }
            const label = headerLabels[index];
            if (label !== undefined) {
                const labelElement = document.createElement("span");
                labelElement.className = "table-column-header-label";
                labelElement.textContent = label;
                cell.insertBefore(labelElement, cell.firstChild);
            }
        });
    }
    render() {
        const rowClass = this.header
            ? "bcgov-table-row header-row"
            : "bcgov-table-row";
        return (h(Host, { key: '678d72dd0c4dcb29955f9c29866234577ea92ed3', class: rowClass, role: "listitem" }, h("slot", { key: 'e1a9908de9b7661a96c3d450c36132b844bb60ab' })));
    }
    static get is() { return "bcgov-table-row"; }
    static get properties() {
        return {
            "header": {
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
                    "text": "This column is the header."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "header"
            }
        };
    }
    static get elementRef() { return "el"; }
}
