import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-footer"
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
