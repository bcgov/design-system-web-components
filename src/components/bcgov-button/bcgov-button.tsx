import { Component, h, Prop, Element } from "@stencil/core";

@Component({
  tag: "bcgov-button",
  scoped: true,
  styleUrl: "bcgov-button.scss"
})
export class BcgovButton {
  /** The action of the button. */
  @Prop() link: string = "button";

  /** Add a callback to handle events */
  @Prop() eventHandler: Function = this.eventHandlerFunction;
  /** Creates Primary button  */
  @Prop() primary?: string;
  /** Creates Secondary button  */
  @Prop() secondary?: string;
  /** Creates Dark button  */
  @Prop() dark?: string;
  @Element() el: HTMLElement;

  eventHandlerFunction() {}

  buttonStyle() {
    let buttonStyle: string = "primary";
    if (undefined !== this.primary) {
      buttonStyle = "primary";
    } else if (undefined !== this.secondary) {
      buttonStyle = "secondary";
    } else if (undefined !== this.dark) {
      buttonStyle = "dark";
    }
    return buttonStyle + " bcgov-button";
  }

  componentDidRender() {
    this.eventHandler(this.el);
  }

  render() {
    if ("button" === this.link) {
      return (
        <button class={this.buttonStyle()}>
          <slot />
        </button>
      );
    } else {
      return (
        <a class={this.buttonStyle()} href={this.link} role="button">
          <slot />
        </a>
      );
    }
  }
}
