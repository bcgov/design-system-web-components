import { Component, Host, h, Element, Prop } from "@stencil/core";

@Component({
  tag: "bcgov-beta"
})
export class BcgovBeta {
  @Prop() content: string = "This Application is currently in Beta Phase";
  @Prop() label: string = "Beta";
  @Element() el;

  componentWillLoad() {
    this.content = this.el.textContent || this.content;
    this.el.innerHTML = this.label;
  }
  render() {
    return <Host aria-label={this.content} aria-role="alert" tabindex="0"></Host>;
  }
}
