import {
  Component,
  h,
  Prop,
  Element,
  Host,
  Listen,
  State,
} from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  tag: "bcgov-button",
})
export class BcgovButton {
  /** The action of the button. */
  @Prop() link: string = "button";

  /** default state of button if applicable */
  @Prop() active: string = "false";

  /** Add a callback to handle events */
  @Prop() eventHandler: Function = this.eventHandlerFunction;

  /** Style of button */
  @Prop() buttonStyle:
    | "primary"
    | "secondary"
    | "dark"
    | "hamburger"
    | "search"
    | "search-inline" = "primary";

  /** A tag target */
  @Prop() target: "_self" | "_blank" | "_parent" | "_top" | null = null;

  /** Target, only used on hamburger and search */
  @Prop() dataTarget: string = null;

  @State() breakpoint: number = 700;

  @Element() el: HTMLElement;

  eventHandlerFunction() {}

  componentDidRender() {
    this.eventHandler(this.el);
    const buttonStyle = this.el.getAttribute("button-style");
    if ("search" === buttonStyle || "search-inline" === buttonStyle) {
      library.add(faSearch);
      const buttonElement = this.el.querySelector("button");
      const faIcon: string = icon(faSearch).html[0];
      buttonElement.innerHTML = `<span class="bcgov-svg-icon">${faIcon}</span><span class="bcgov-button-text">${buttonElement.innerHTML}</span>`;
    }
  }
  componentWillLoad() {
    if (null !== this.dataTarget) {
      const self: any = this;
      this.breakpoint = this.getParentBreakpoint();
      this.el.setAttribute("data-breakpoint", `${this.breakpoint}`);
      const element = document.getElementById(this.dataTarget);
      if (null !== element) {
        if ("false" === this.active) {
          element.classList.add("target-hidden");
        }
        window.addEventListener("click", function (event) {
          const clickElement: any = event.srcElement;
          const button = self.el.querySelector("button");
          if (null === clickElement.closest("bcgov-menu")) {
            if (clickElement.parentElement !== self.el) {
              if ("true" === button.getAttribute("aria-expanded", true)) {
                //self.onClick();
              }
            }
          }
        });
      }
      this.isDesktop();

      window.addEventListener("resize", function () {
        self.isDesktop();
      });
    }
  }

  getParentBreakpoint() {
    let value: string = "0";
    if (null !== this.dataTarget) {
      const element = document.getElementById(this.dataTarget);
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
    if (null !== this.dataTarget) {
      const element = document.getElementById(this.dataTarget);
      const button = this.el.querySelector("button");
      if (null !== element) {
        if (undefined !== button && button.hasAttribute("aria-expanded")) {
          button.setAttribute(
            "aria-expanded",
            element.classList.contains("target-hidden") ? "true" : "false"
          );
        }
        if (element.classList.contains("target-hidden")) {
          element.classList.remove("target-hidden");
        } else {
          element.classList.add("target-hidden");
        }
      }
    }
  }

  render() {
    const btnStyle = `${this.buttonStyle}`;
    let props = {
      class: btnStyle,
    };
    if (["hamburger", "search"].includes(this.buttonStyle)) {
      props["aria-expanded"] = this.active;
      return (
        <Host data-target={this.dataTarget} class="bcgov-button">
          <button {...props}>
            <div></div>
            <slot />
          </button>
        </Host>
      );
    } else {
      if ("button" === this.link) {
        if ("search-inline" == this.buttonStyle) {
          props["type"] = "submit";
        }
        return (
          <Host class="bcgov-button">
            <button {...props}>
              <slot />
            </button>
          </Host>
        );
      } else {
        props["href"] = this.link;
        props["target"] = this.target;
        props["role"] = "button";
        return (
          <Host class="bcgov-button">
            <a {...props}>
              <slot />
            </a>
          </Host>
        );
      }
    }
  }
}
