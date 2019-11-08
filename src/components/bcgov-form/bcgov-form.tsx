import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-form"
})
export class BcgovForm {
  render() {
    return (
      <Host>
        <div>This is a form component</div>
        <slot></slot>
      </Host>
    );
  }
}
