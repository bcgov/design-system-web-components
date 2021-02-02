import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-form",
})
export class BcgovForm {
  render() {
    return (
      <Host className="bcgov-form">
        <slot></slot>
      </Host>
    );
  }
}
