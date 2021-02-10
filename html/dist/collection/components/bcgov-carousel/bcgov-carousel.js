import { Component, Host, h } from "@stencil/core";
export class BcgovCarousel {
  render() {
    return (h(Host, { class: "bcgov-carousel" },
      h("slot", null)));
  }
  static get is() { return "bcgov-carousel"; }
  static get encapsulation() { return "shadow"; }
}
