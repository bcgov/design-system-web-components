import { Component, Host, h, Prop, Element, Listen } from "@stencil/core";
import { menuElement } from "../utils/utils";

@Component({
  tag: "bcgov-menu"
})
export class BcgovMenu {
  @Prop() alignment: string = "left";
  @Prop() allTags: NodeList;
  @Prop() menuId: string = "menu";
  @Prop() instructions: string;
  @Prop() isSubmenu: boolean = false;
  @Prop() href: string;
  @Prop() name: string;
  @Prop() clone: Node;
  @Element() el;

  getInstructions() {
    return (
      this.instructions ||
      `Use arrow keys to navigate between menuitems,
    spacebar to expand submenus, 
    escape key to close submenus, 
    enter to activate menuitems.`
    );
  }
  componentWillLoad() {
    this.isSubmenu = "UL" === this.el.parentElement.nodeName;
    [].forEach.call(this.el.querySelectorAll("a"), function(element) {
      menuElement(element);
    });
  }

  componentDidRender() {}

  @Listen("mouseenter")
  onMouseEnter(ev: Event) {
    const element = ev.target as HTMLElement;
    this.showSubmenu(element, true);
  }

  @Listen("mouseleave")
  onMouseLeave(ev: Event) {
    const element = ev.target as HTMLElement;
    this.showSubmenu(element, false);
  }

  showSubmenu = (target: Element, expanded: boolean) => {
    if (expanded) {
      target.classList.add("expanded");
    } else {
      target.classList.remove("expanded");
    }

    target.setAttribute("aria-expanded", expanded ? "true" : "false");
    target.setAttribute("tabindex", expanded ? "-1" : "0");
  };

  render() {
    const alignment: string = "align-" + this.alignment;
    const instructionID: string = "bcgov-instructions-" + this.menuId;

    if (this.isSubmenu) {
      return (
        <Host role="menuitem" class="expandable">
          <a href={this.href}>{this.name}</a>
          <ul role="menu">
            <slot></slot>
          </ul>
        </Host>
      );
    } else {
      if (undefined !== this.instructions) {
        return (
          <Host>
            <ul role="menubar" class={alignment} aria-labelledby={instructionID}>
              <slot></slot>
            </ul>
            <div class="sr-only" aria-hidden="true" id={instructionID}>
              {this.instructions}
            </div>
          </Host>
        );
      } else {
        return (
          <Host>
            <ul role="menubar" class={alignment}>
              <slot></slot>
            </ul>
          </Host>
        );
      }
    }
  }
}
