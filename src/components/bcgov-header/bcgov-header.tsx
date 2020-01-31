import { Component, Prop, h, Host, Element, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";

@Component({
  tag: "bcgov-header",
  assetsDirs: ["../../assets"]
})
export class BcgovHeader {
  /** link for logo */
  @Prop() href: string = "https://www2.gov.bc.ca/gov/content/home";
  @Prop() logo:
    | ""
    | "gov_bc_logo.svg"
    | "gov_bc_logo_white.png"
    | "gov_bc_logo_grey.jpg" = "gov_bc_logo.svg";
  @Element() el;

  componentWillLoad() {}

  componentDidRender() {
    const self = this;
    [].forEach.call(this.el.querySelectorAll("*[aria]"), function(element) {
      element.classList.add("access");
    });
    [].forEach.call(this.el.querySelectorAll("img"), function(element) {
      const divTag: HTMLElement = document.createElement("div");
      divTag.classList.add("banner");

      if (undefined !== self.href && "" !== self.href) {
        const atag: HTMLElement = document.createElement("a");
        atag.classList.add("branding-logo");
        atag.setAttribute("aria-label", "branding logo");
        atag.setAttribute("href", self.href);
        atag.appendChild(element.cloneNode(true));
        divTag.appendChild(atag);
      } else {
        divTag.appendChild(element.cloneNode(true));
      }
      element.replaceWith(divTag);
    });
    [].forEach.call(this.el.querySelectorAll("*[aria] a"), function(element) {
      element.setAttribute("aria", "");
      filterATags(element);
    });
  }

  getImage() {
    if ("" === this.logo) {
      return "";
    } else {
      let image = getAssetPath(`./assets/${this.logo}`);
      let markup = <img class="header-logo" src={image} alt="Logo" />;
      if ("" !== this.href) {
        markup = (
          <a class="branding-logo" href={this.href} aria-label="branding logo">
            {markup}
          </a>
        );
      }

      return <div class="banner">{markup}</div>;
    }
  }

  render() {
    return (
      <Host class="bcgov-header">
        <header>
          {this.getImage()}
          <slot></slot>
        </header>
      </Host>
    );
  }
}
