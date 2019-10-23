import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-footer",
  styleUrl: "bcgov-footer.scss",
  scoped: true
})
export class BcgovFooter {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
