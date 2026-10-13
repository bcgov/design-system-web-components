import { Component, Element, Host, h, Listen, Prop } from "@stencil/core";

@Component({
  tag: "bcgov-table",
})
export class BcgovTable {
  /** Breakpoint at which the table turns into rows. */
  @Prop() breakpoint: number = 960;

  /** The primary column. */
  @Prop() primaryColumn: number;

  /** Shows header columns when not in table. */
  @Prop() showColumnLabels: boolean;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.isTable();
  }

  @Listen("resize", { target: "window" })
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

    return (
      <Host class={tableClass} role="list">
        <slot></slot>
      </Host>
    );
  }
}
