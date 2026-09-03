'use strict';

var index = require('./index-B8yp6nTe.js');

const BcgovFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Alignment of menu */
    /*@Prop() alignment: "left" | "right" = "left";*/
    /** Built in Logos, other wise just add image, before or after menu. */
    logo = "gov_bc_logo_white.png";
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
        return (index.h(index.Host, { key: '5448b5089627e57d3bbd9efc7974271940dbdf0c', ...props }, index.h("slot", { key: '8dec0009ce0eccd7c00069bece5b1137c0016665' }), this.getImage()));
    }
};

exports.bcgov_footer = BcgovFooter;
