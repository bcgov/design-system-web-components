import { Component, Element, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "bcgov-table-row",
})
export class BcgovTableRow {
  @Element() el: HTMLElement;

  /** Indicates whether this row is the table header. */
  @Prop() header: boolean;

  componentDidLoad() {
    const table = this.el.parentElement;
    if (table?.nodeName !== "BCGOV-TABLE" || this.header) {
      return;
    }

    const primaryColumn = Number(table.getAttribute("primary-column"));
    if (!Number.isInteger(primaryColumn) || primaryColumn <= 0) {
      return;
    }

    const headerLabels = Array.from(
      table.querySelectorAll("bcgov-table-row[header], .header-row"),
    )
      .filter((row) => row !== this.el)
      .flatMap((row) =>
        Array.from(row.children, (cell) =>
          (cell.textContent ?? "").replace(/[\n\r]+|[\s]{2,}/g, " "),
        ),
      );
    const cells = Array.from(this.el.children).filter(
      (cell) => cell.tagName === "DIV",
    );

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

    return (
      <Host class={rowClass} role="listitem">
        <slot></slot>
      </Host>
    );
  }
}
