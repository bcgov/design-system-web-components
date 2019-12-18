import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-form"
})
export class BcgovForm {
  render() {
    return (
      <Host class="bcgov-form">
        <div>This is a form component</div>
        <slot></slot>
      </Host>
    );
  }
}
