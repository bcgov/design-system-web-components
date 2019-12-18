import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "bcgov-footer"
})
export class BcgovFooter {
  /** Alignment of menu */
  @Prop() alignment: "left" | "right" = "left";

  render() {
    const classes: string = "bcgov-footer" + " align-" + this.alignment;
    const props = { role: "footer", class: classes };
    return (
      <Host {...props}>
        <slot></slot>
      </Host>
    );
  }
}
