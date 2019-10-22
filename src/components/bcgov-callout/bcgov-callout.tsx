import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-callout",
  styleUrl: "bcgov-callout.scss",
  scoped: true
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
