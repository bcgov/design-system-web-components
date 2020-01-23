import { r as registerInstance, c as getAssetPath, h, H as Host } from './core-d4bdadec.js';
var BcgovFooter = /** @class */ (function () {
    function BcgovFooter(hostRef) {
        registerInstance(this, hostRef);
        /** Alignment of menu */
        /*@Prop() alignment: "left" | "right" = "left";*/
        /** Built in Logos, other wise just add image, before or after menu. */
        this.logo = "gov_bc_logo_white.png";
    }
    BcgovFooter.prototype.getImage = function () {
        if ("" === this.logo) {
            return "";
        }
        else {
            var image = getAssetPath("../../assets/" + this.logo);
            return h("img", { class: "footer-logo", src: image, alt: "Logo" });
        }
    };
    BcgovFooter.prototype.render = function () {
        var classes = "bcgov-footer" /*+ " align-" + this.alignment*/;
        var props = { role: "footer", class: classes };
        return (h(Host, Object.assign({}, props), h("slot", null), this.getImage()));
    };
    return BcgovFooter;
}());
export { BcgovFooter as bcgov_footer };
