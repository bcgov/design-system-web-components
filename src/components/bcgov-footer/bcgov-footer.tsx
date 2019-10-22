import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-footer",
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
