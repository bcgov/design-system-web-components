import { r as registerInstance, f as getAssetPath, h, e as Host, g as getElement } from './index-268dcccf.js';
import { f as filterATags } from './utils-3032e340.js';

let BcgovHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** link for logo */
    this.href = "https://www2.gov.bc.ca/gov/content/home";
    /** Logo options -- might not work... */
    this.logo = "gov_bc_logo.svg";
  }
  componentWillLoad() { }
  componentDidRender() {
    const self = this;
    [].forEach.call(this.el.querySelectorAll("div[aria]"), function (element) {
      element.classList.add("access");
    });
    let $img = this.el.querySelectorAll("img");
    let divTag = document.createElement("div");
    let atag;
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
      }
      else {
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
    }
    else {
      let image = getAssetPath(`./assets/${this.logo}`);
      let markup = h("img", { class: "header-logo", src: image, alt: "Logo" });
      if ("" !== this.href) {
        markup = (h("a", { class: "branding-logo", href: this.href, "aria-label": "branding logo" }, markup));
      }
      return "";
      //return <div class="banner">{markup}</div>;
    }
  }
  render() {
    return (h(Host, { className: "bcgov-header" }, h("header", null, this.getImage(), h("slot", null))));
  }
  static get assetsDirs() { return ["../../assets"]; }
  get el() { return getElement(this); }
};

export { BcgovHeader as bcgov_header };
