'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-eae88e05.js');

const BcgovFooter = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            let image = core.getAssetPath(`../../assets/${this.logo}`);
            return core.h("img", { class: "footer-logo", src: image, alt: "Logo" });
        }
    }
    render() {
        const classes = "bcgov-footer" /*+ " align-" + this.alignment*/;
        const props = { role: "footer", class: classes };
        return (core.h(core.Host, Object.assign({}, props), core.h("slot", null), this.getImage()));
    }
};

exports.bcgov_footer = BcgovFooter;
