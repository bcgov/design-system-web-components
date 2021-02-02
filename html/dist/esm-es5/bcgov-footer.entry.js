import { r as registerInstance, c as getAssetPath, h, H as Host } from './core-07a37eb8.js';
var BcgovFooter = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** Alignment of menu */
        /*@Prop() alignment: "left" | "right" = "left";*/
        /** Built in Logos, other wise just add image, before or after menu. */
        this.logo = "gov_bc_logo_white.png";
    }
    class_1.prototype.getImage = function () {
        if ("" === this.logo) {
            return "";
        }
        else {
            var image = getAssetPath("../../assets/" + this.logo);
            return h("img", { class: "footer-logo", src: image, alt: "Logo" });
        }
    };
    class_1.prototype.render = function () {
        var classes = "bcgov-footer" /*+ " align-" + this.alignment*/;
        var props = { className: classes };
        return (h(Host, Object.assign({}, props), h("slot", null), this.getImage()));
    };
    return class_1;
}());
export { BcgovFooter as bcgov_footer };
