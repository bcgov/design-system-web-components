import { Component, Host, h, Prop, getAssetPath } from "@stencil/core";

@Component({
  tag: "bcgov-footer"
})
export class BcgovFooter {
  /** Alignment of menu */
  /*@Prop() alignment: "left" | "right" = "left";*/
  /** Built in Logos, other wise just add image, before or after menu. */
  @Prop() logo:
    | ""
    | "gov_bc_logo.svg"
    | "gov_bc_logo_white.png"
    | "gov_bc_logo_grey.jpg" = "gov_bc_logo_white.png";

  getImage() {
    if ("" === this.logo) {
      return "";
    } else {
      let image = getAssetPath(`../../assets/${this.logo}`);
      return <img class="footer-logo" src={image} alt="Logo"></img>;
    }
  }
  render() {
    const classes: string = "bcgov-footer" /*+ " align-" + this.alignment*/;
    const props = { role: "footer", class: classes };
    return (
      <Host {...props}>
        <slot></slot>
        {this.getImage()}
      </Host>
    );
  }
}
