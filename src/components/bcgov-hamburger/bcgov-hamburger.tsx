import { Component, Host, h, Prop, Listen, Element } from "@stencil/core";

@Component({
  tag: "bcgov-hamburger"
})
export class BcgovHamburger {
  /** The target */
  @Prop() target: string = null;
  /** Breakpoint */
  @Prop() breakpoint: number = null;
  @Element() el;

  @Listen("click")
  onClick(event: Event) {
    const element = event.target as HTMLElement;
    let parent: HTMLElement = element;
    let count: number = 0;
    do {
      if (null === parent) {
        break;
      }
      parent = parent.parentElement;
      ++count;
    } while (null !== parent && null === parent.getAttribute("target") && count < 3);
    if (undefined !== parent && parent.getAttribute("target")) {
      const menuElement: HTMLElement = document.getElementById(parent.getAttribute("target"));
      if (undefined !== menuElement) {
        if (menuElement.classList.contains("in")) {
          menuElement.classList.remove("in");
        } else {
          menuElement.classList.add("in");
        }
      }
    } else {
      console.error("Couldn't find menu for hamburger, Check to make sure id's match");
    }
  }

  componentWillLoad() {
    const parent = this.el.parentElement;
    this.target = this.target || ("BCGOV-MENU" === parent.nodeName && parent.getAttribute("id"));
    this.breakpoint = this.breakpoint || this.getParentBreakpoint();
    this.isDesktop();
    const self = this;
    window.addEventListener("resize", function() {
      self.isDesktop();
    });
  }
  getParentBreakpoint() {
    let value: string = "0";
    const element = document.getElementById(this.target);
    if (null !== element) {
      value = element.getAttribute("breakpoint");
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

  render() {
    return (
      <Host target={this.target}>
        <button class="bcgov-navbar-toggle" aria-expanded="false">
          <div></div>
          <slot />
        </button>
      </Host>
    );
  }
}
