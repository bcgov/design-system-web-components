import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-form",
})
export class BcgovForm {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
