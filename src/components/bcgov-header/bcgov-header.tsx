import { Component, Prop, h, Host, Element, getAssetPath } from "@stencil/core";
import { filterATags } from "../utils/utils";

@Component({
  tag: "bcgov-header",
  assetsDirs: ["../../assets"],
})
export class BcgovHeader {
  /** link for logo */
  @Prop() href: string = "https://www2.gov.bc.ca/gov/content/home";
  /** Logo options -- might not work... */
  @Prop() logo:
    | ""
    | "gov_bc_logo.svg"
    | "gov_bc_logo_white.png"
    | "gov_bc_logo_grey.jpg" = "gov_bc_logo.svg";
  @Element() el;

  componentWillLoad() {}

  componentDidRender() {
    const self = this;
    [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
      element.classList.add("access");
    });
    let $img = this.el.querySelectorAll("img");
    let divTag: HTMLElement = document.createElement("div");
    let atag: HTMLElement;
    divTag.classList.add("banner");
    [].forEach.call($img, function (element) {
      if (undefined !== self.href && "" !== self.href) {
        if (undefined === atag) {
          atag = document.createElement("a");
          atag.classList.add("branding-logo");
          atag.setAttribute("aria-label", "branding logo");
          atag.setAttribute("href", self.href);
          divTag.appendChild(atag);
        }
        atag.appendChild(element.cloneNode(true));
      } else {
        divTag.appendChild(element.cloneNode(true));
      }
      //element.replaceWith(divTag);
      element.parentNode.replaceChild(divTag, element);
    });

    [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
      [].forEach.call(element.querySelectorAll("a"), function (element) {
        element.setAttribute("aria", "");
        filterATags(element);
      });
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
      return "";
      //return <div class="banner">{markup}</div>;
    }
  }

  render() {
    return (
      <Host className="bcgov-header">
        <header>
          {this.getImage()}
          <slot></slot>
        </header>
      </Host>
    );
  }
}
