import { Component, Prop, h, Host, Element } from "@stencil/core";
import { filterATags } from "../utils/utils";

@Component({
  tag: "bcgov-header"
})
export class BcgovHeader {
  /** link for logo */
  @Prop() href: string = "https://www2.gov.bc.ca/gov/content/home";
  @Element() el;

  componentDidRender() {
    [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function(
      element
    ) {
      filterATags(element);
    });
  }
  render() {
    return (
      <Host>
        <header class="bcgov-header">
          <div class="banner">
            <a
              class="branding-logo"
              href={this.href}
              aria-label="branding logo"
            >
              <slot name="logo"></slot>
            </a>
            <div class="hl">
              <slot name="headline"></slot>
            </div>
            <div class="access">
              <slot name="hidden-link"></slot>
            </div>
          </div>
        </header>
        <slot></slot>
      </Host>
    );
  }
}
