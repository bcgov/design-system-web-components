import { r as registerInstance, f as getAssetPath, h, e as Host } from './index-268dcccf.js';

let BcgovFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Alignment of menu */
    /*@Prop() alignment: "left" | "right" = "left";*/
    /** Built in Logos, other wise just add image, before or after menu. */
    this.logo = "gov_bc_logo_white.png";
  }
  getImage() {
    if ("" === this.logo) {
      return "";
    }
    else {
      let image = getAssetPath(`../../assets/${this.logo}`);
      return h("img", { class: "footer-logo", src: image, alt: "Logo" });
    }
  }
  render() {
    const classes = "bcgov-footer" /*+ " align-" + this.alignment*/;
    const props = { className: classes };
    return (h(Host, Object.assign({}, props), h("slot", null), this.getImage()));
  }
};

export { BcgovFooter as bcgov_footer };
