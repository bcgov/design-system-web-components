import { Component, Host, h, Element, Prop, State } from "@stencil/core";

@Component({
  tag: "bcgov-beta"
})
export class BcgovBeta {
  @Prop() content: string = "This Application is currently in Beta Phase";
  @Prop() label: string = "Beta";
  @State() stateContent: string = "";
  @Element() el;

  componentWillLoad() {
    this.stateContent = this.el.textContent || this.content;
    this.el.innerHTML = this.label;
  }
  render() {
    return (
      <Host
        class="bcgov-beta"
        aria-label={this.stateContent}
        role="alert"
        tabindex="0"
      ></Host>
    );
  }
}
