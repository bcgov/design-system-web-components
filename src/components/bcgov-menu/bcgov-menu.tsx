import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Listen,
  State
} from "@stencil/core";
import { menuElement, keys, findAncestor } from "../utils/utils";

@Component({
  tag: "bcgov-menu"
})
export class BcgovMenu {
  /** Alignment of menu */
  @Prop() alignment: string = "left";

  @Prop() primary: string;

  @Prop() sidebar: string;
  /** Menu id used for instructions
   * TODO: this might need more consideration
   */
  @Prop() menuId: string = "menu";

  /** Aria Instructions */
  @Prop() instructions: string = `Use arrow keys to navigate between menuitems,
  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.`;

  /** Link for menu */
  @Prop() href: string;

  /** Label for submenu */
  @Prop() name: string;

  /** A number that represents mobile menu breakpoint in px; */
  @Prop() breakpoint: number = 0;

  /**  Automatically adds hamburger. */
  @Prop() hamburger: boolean = true;

  @Prop() active: boolean = false;

  @State() isSubmenu: boolean = false;
  @State() clone: Node;
  @State() allTags: NodeList;

  @Element() el;

  componentWillLoad() {
    this.isSubmenu = "UL" === this.el.parentElement.nodeName;
    [].forEach.call(this.el.querySelectorAll("a"), function(element) {
      menuElement(element);
    });
    const self = this;
    if (!this.isSubmenu) {
      this.isDesktop();
      window.addEventListener("resize", function() {
        self.isDesktop();
      });
    }
  }

  /**
   * This sets up inital attributes for sub menus
   */
  componentDidRender() {
    if (this.isSubmenu) {
      this.el.setAttribute("aria-haspopup", true);
      this.el.setAttribute("aria-expanded", false);
      this.el.setAttribute("aria-selected", false);
      this.el.setAttribute("tabindex", -1);
    } else {
      const firstChild = this.el.querySelector("ul > *:first-child");
      if (null !== firstChild) {
        firstChild.setAttribute("tabindex", 0);
      }
    }
  }

  isDesktop() {
    let isdesktop: boolean = false;
    if (!this.isSubmenu) {
      if (window.innerWidth >= this.breakpoint) {
        if (!this.el.classList.contains("is-desktop")) {
          this.el.classList.add("is-desktop");
        }
        isdesktop = true;
      } else {
        this.el.classList.remove("is-desktop");
      }
    } else {
      let parent: HTMLElement = findAncestor(this.el, "bcgov-menu");
      if (null !== parent && parent.getAttribute("breakpoint")) {
        const bp = parseInt(parent.getAttribute("breakpoint"));
        isdesktop = window.innerWidth >= bp;
      }
    }
    return isdesktop;
  }

  @Listen("mouseenter")
  onMouseEnter(ev: Event) {
    //console.log(this.isDesktop(), ev, this.isSubmenu);
    if (this.isDesktop()) {
      const element = ev.target as HTMLElement;
      this.showSubmenu(element, true);
    }
  }

  @Listen("mouseleave")
  onMouseLeave(event: Event) {
    if (this.isDesktop()) {
      const element = event.target as HTMLElement;
      this.showSubmenu(element, false);
    }
  }

  @Listen("click")
  onClick(event: Event) {
    if (!this.isDesktop()) {
      const element = event.target as HTMLElement;
      const parent = findAncestor(element, "bcgov-menu");

      this.showSubmenu(parent, !parent.classList.contains("expanded"));
    }
  }

  @Listen("keydown")
  onKeyDown(event: KeyboardEvent) {
    const current: any = event.srcElement;

    if (!this.isSubmenu || true) {
      switch (event.keyCode) {
        case keys.enter:
          current.querySelector("a").click();
        case keys.space:
          event.preventDefault();
          event.stopPropagation();
          this.showSubmenu(this.el, true);
          break;
        case keys.esc:
          event.preventDefault();
          event.stopPropagation();
          this.showSubmenu(this.el, false);
          break;
        case keys.right:
          event.preventDefault();
          this.focusChange(current, "next");
          break;
        case keys.left:
          event.preventDefault();
          this.focusChange(current, "prev");
          break;
        case keys.up:
          event.preventDefault();
          this.focusChange(current, "up");
          break;
        case keys.down:
          event.preventDefault();
          this.focusChange(current, "down");
          break;
      }
    }
  }

  focusChange(current: HTMLElement, direction: string = "next") {
    if (this.isSubmenu) {
      return;
    }
    let element: any;

    if ("next" === direction || "down" === direction) {
      element = current.nextElementSibling;
    } else if ("prev" == direction || "up" === direction) {
      element = current.previousElementSibling;
    }
    const insideSub: boolean =
      null !== findAncestor(current, 'ul[role="menu"]');
    const checkAllowed =
      (insideSub && ("up" === direction || "down" === direction)) ||
      (!insideSub && ("prev" === direction || "next" === direction));
    if (!checkAllowed) {
      return;
    }

    if (
      null != element &&
      ("LI" === current.nodeName || "BCGOV-MENU" === current.nodeName)
    ) {
      current.setAttribute("tabindex", "-1");
      element.setAttribute("tabindex", "0");
      element.focus();
    }
  }

  showSubmenu = (target: Element, expanded: boolean) => {
    if (!this.isSubmenu) {
      return;
    }
    if (expanded) {
      target.classList.add("expanded");
    } else {
      target.classList.remove("expanded");
    }

    target.setAttribute("aria-expanded", expanded ? "true" : "false");
    target.setAttribute("tabindex", expanded ? "-1" : "0");
    target.setAttribute("aria-selected", expanded ? "true" : "false");
    const submenu = target.querySelector("ul");
    if (null !== submenu) {
      submenu.setAttribute("aria-hidden", expanded ? "false" : "true");
      if (expanded) {
        const firstFocus: HTMLElement = target.querySelector(
          "ul > li:first-child"
        );
        firstFocus.setAttribute("tabindex", "-1");
        firstFocus.focus();
      } else {
        this.el.focus();
      }
    }
  };

  render() {
    const alignment: string = "align-" + this.alignment;
    const instructionID: string = "bcgov-instructions-" + this.menuId;
    let hostClass: string = "expandabler";

    if (this.isSubmenu) {
      if (undefined !== this.active) {
        hostClass += " active";
      }
      return (
        <Host role="menuitem" class={hostClass} aria-label={this.name}>
          <div>
            <a href={this.href} tabindex="-1">
              {this.name}
            </a>
            <slot name="submenu-link"></slot>
          </div>
          <ul role="menu" aria-hidden="true">
            <slot></slot>
          </ul>
        </Host>
      );
    } else {
      const props = { role: "menubar", tabindex: "0", class: alignment };
      if (undefined !== this.primary) {
        props["aria-labelledby"] = instructionID;
      }
      if (undefined !== this.sidebar) {
        props["class"] += " sidebar-menu";
      }
      return (
        <Host>
          <ul {...props}>
            <slot></slot>
          </ul>
          {undefined !== this.primary && (
            <div class="sr-only" aria-hidden="true" id={instructionID}>
              {this.instructions}
            </div>
          )}
        </Host>
      );
    }
  }
}
