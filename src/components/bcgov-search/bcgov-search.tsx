import { Component, Host, h, Element } from "@stencil/core";

@Component({
  tag: "bcgov-search"
})
export class BcgovSearch {
  @Element() el;

  render() {
    return (
      <Host>
        <div class="search-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
