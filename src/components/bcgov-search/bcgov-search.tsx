import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bcgov-search",
  shadow: true
})
export class BcgovSearch {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
