import { Component, h, Prop, Element, Host, Listen, State } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  tag: "bcgov-button"
})
export class BcgovButton {
  /** The action of the button. */
  @Prop() link: string = "button";

  /** Add a callback to handle events */
  @Prop() eventHandler: Function = this.eventHandlerFunction;

  /** Style of button */
  @Prop() buttonStyle: "primary" | "secondary" | "dark" | "hamburger" | "search" = "primary";

  /** Target, only used on hamburger and search */
  @Prop() target: string = null;

  @State() breakpoint: number = 700;

  @Element() el: HTMLElement;

  eventHandlerFunction() {}

  componentDidRender() {
    this.eventHandler(this.el);
    if ("search" === this.el.getAttribute("button-style")) {
      library.add(faSearch);
      const buttonElement = this.el.querySelector("button");
      buttonElement.innerHTML = icon(faSearch).html[0];
    }
  }
  componentWillLoad() {
    if (null !== this.target) {
      this.breakpoint = this.getParentBreakpoint();
      this.isDesktop();
      const self = this;
      window.addEventListener("resize", function() {
        self.isDesktop();
      });
    }
  }

  getParentBreakpoint() {
    let value: string = "0";
    if (null !== this.target) {
      const element = document.getElementById(this.target);
      if (null !== element && element.hasAttribute("breakpoint")) {
        value = element.getAttribute("breakpoint");
      }
    }
    return parseInt(value);
  }

  isDesktop() {
    let isdesktop: boolean = false;
    if (window.innerWidth >= this.breakpoint) {
      this.el.classList.add("is-desktop");
    } else {
      this.el.classList.remove("is-desktop");
    }
    return isdesktop;
  }
  @Listen("click")
  onClick() {
    if (null !== this.target) {
      const element = document.getElementById(this.target);
      const button = this.el.querySelector("button");
      if (null !== element) {
        if (undefined !== button && button.hasAttribute("aria-expanded")) {
          button.setAttribute("aria-expanded", element.classList.contains("in") ? "false" : "true");
        }
        if (element.classList.contains("in")) {
          element.classList.remove("in");
        } else {
          element.classList.add("in");
        }
      }
    }
  }

  render() {
    const btnStyle = `${this.buttonStyle} bcgov-button`;
    if (["hamburger", "search"].includes(this.buttonStyle)) {
      return (
        <Host target={this.target}>
          <button class={btnStyle} aria-expanded="false">
            <div></div>
            <slot />
          </button>
        </Host>
      );
    } else {
      if ("button" === this.link) {
        return (
          <button class={btnStyle}>
            <slot />
          </button>
        );
      } else {
        return (
          <a class={btnStyle} href={this.link} role="button">
            <slot />
          </a>
        );
      }
    }
  }
}
