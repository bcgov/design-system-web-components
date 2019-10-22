import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "bcgov-section-divider",
  styleUrl: "bcgov-section-divider.scss",
  scoped: true
})
export class BcgovSectionDivider {
  @Prop() thickness;
  @Prop() margins;

  inlineStyles = { height: this.thickness, margin: this.margins };

  componentDidLoad() {
    this.inlineStyles = { height: this.thickness, margin: this.margins };
  }

  render() {
    return <div class="divider" style={this.inlineStyles}></div>;
  }
}
