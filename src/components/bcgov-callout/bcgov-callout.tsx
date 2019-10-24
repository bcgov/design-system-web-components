import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-callout"
})
export class BcgovCallout {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
