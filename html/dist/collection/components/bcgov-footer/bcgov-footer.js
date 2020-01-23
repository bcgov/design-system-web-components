import { Host, h, getAssetPath } from "@stencil/core";
export class BcgovFooter {
    constructor() {
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
        return (h(Host, Object.assign({}, props),
            h("slot", null),
            this.getImage()));
    }
    static get is() { return "bcgov-footer"; }
    static get properties() { return {
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
            "attribute": "logo",
            "reflect": false,
            "defaultValue": "\"gov_bc_logo_white.png\""
        }
    }; }
}
