import { r as registerInstance, c as getAssetPath, h, H as Host } from './core-07a37eb8.js';

const BcgovFooter = class {
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
        const props = { role: "footer", class: classes };
        return (h(Host, Object.assign({}, props), h("slot", null), this.getImage()));
    }
};

export { BcgovFooter as bcgov_footer };
