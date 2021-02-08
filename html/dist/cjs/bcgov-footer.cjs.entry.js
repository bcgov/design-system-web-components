'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb239ad2.js');

const BcgovFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      let image = index.getAssetPath(`../../assets/${this.logo}`);
      return index.h("img", { class: "footer-logo", src: image, alt: "Logo" });
    }
  }
  render() {
    const classes = "bcgov-footer" /*+ " align-" + this.alignment*/;
    const props = { className: classes };
    return (index.h(index.Host, Object.assign({}, props), index.h("slot", null), this.getImage()));
  }
};

exports.bcgov_footer = BcgovFooter;
