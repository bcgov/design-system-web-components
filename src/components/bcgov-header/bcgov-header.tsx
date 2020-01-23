import {
  Component,
  Prop,
  h,
  Host,
  Element,
  getAssetPath,
  State
} from "@stencil/core";
import { filterATags } from "../utils/utils";

@Component({
  tag: "bcgov-header",
  assetsDirs: ["../../assets"]
})
export class BcgovHeader {
  /** link for logo */
  @Prop() href: string = "https://www2.gov.bc.ca/gov/content/home";
  @Prop() logo: string = "gov_bc_logo.svg";
  @Element() el;
  @State() hasLogoSlot: boolean;

  componentWillLoad() {
    this.hasLogoSlot = !!this.el.querySelector('[slot="logo"]');
  }

  componentDidRender() {
    [].forEach.call(this.el.querySelectorAll('a[slot="hidden-link"]'), function(
      element
    ) {
      filterATags(element);
    });
  }

  getImage() {
    if ("" === this.logo) {
      return "";
    } else {
      let image = getAssetPath(`../../assets/${this.logo}`);
      return <img src={image} alt="Logo"></img>;
    }
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
              {this.hasLogoSlot ? <slot name="logo"></slot> : this.getImage()}
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
