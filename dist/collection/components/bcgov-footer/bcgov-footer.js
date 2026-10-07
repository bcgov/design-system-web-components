import { Host, h, getAssetPath } from "@stencil/core";
export class BcgovFooter {
    /** Alignment of menu */
    /*@Prop() alignment: "left" | "right" = "left";*/
    /** Built in Logos, other wise just add image, before or after menu. */
    logo = "gov_bc_logo_white.png";
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
        return (h(Host, { key: '5448b5089627e57d3bbd9efc7974271940dbdf0c', ...props }, h("slot", { key: '8dec0009ce0eccd7c00069bece5b1137c0016665' }), this.getImage()));
    }
    static get is() { return "bcgov-footer"; }
    static get properties() {
        return {
            "logo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| \"\"\n    | \"gov_bc_logo.svg\"\n    | \"gov_bc_logo_white.png\"\n    | \"gov_bc_logo_grey.jpg\"",
                    "resolved": "\"\" | \"gov_bc_logo.svg\" | \"gov_bc_logo_grey.jpg\" | \"gov_bc_logo_white.png\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Built in Logos, other wise just add image, before or after menu."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "logo",
                "defaultValue": "\"gov_bc_logo_white.png\""
            }
        };
    }
}
