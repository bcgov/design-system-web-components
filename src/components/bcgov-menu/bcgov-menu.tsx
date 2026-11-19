import { Component, Element, Host, h, Listen, Prop } from "@stencil/core";

let submenuSequence = 0;

@Component({
  tag: "bcgov-menu",
})
export class BcgovMenu {
  /** Horizontal alignment of the top-level list. */
  @Prop() alignment: string = "left";
  /** Viewport width at which the menu switches to desktop styling. */
  @Prop() breakpoint: number = 0;
  /** Accessible name for the navigation landmark. */
  @Prop() label: string = "Navigation";
  /** Apply primary header-navigation styling and a mobile close button. */
  @Prop() primary: boolean = false;
  /** Use the compact sidebar layout. */
  @Prop() sidebar: boolean = false;

  @Element() el: HTMLElement = new HTMLElement();

  componentWillLoad() {
    this.updateDesktop();
    this.initializeDisclosures();
    this.el.querySelectorAll<HTMLAnchorElement>("a[active]").forEach((link) => {
      if (link.parentElement?.nodeName === "LI") {
        link.parentElement.classList.add("active");
      }
    });
  }

  @Listen("resize", { target: "window" })
  onResize() {
    this.updateDesktop();
  }

  @Listen("click")
  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest(".bcgov-primary-menu-close")) {
      this.el.classList.add("target-hidden");
      return;
    }

    const button = target.closest<HTMLButtonElement>(
      "button.disclosure-toggle"
    );
    if (button && this.el.contains(button)) {
      this.setExpanded(button, button.getAttribute("aria-expanded") !== "true");
    }
  }

  @Listen("click", { target: "document" })
  onDocumentClick(event: MouseEvent) {
    const target = event.target;
    if (target instanceof Node && this.el.contains(target)) {
      return;
    }

    this.el
      .querySelectorAll<HTMLButtonElement>(
        'button.disclosure-toggle[aria-expanded="true"]'
      )
      .forEach((button) => this.setExpanded(button, false));
  }

  @Listen("blur")
  onFocusOut(event: FocusEvent) {
    const nextTarget = event.relatedTarget as Node | null;
    this.el
      .querySelectorAll<HTMLButtonElement>(
        'button.disclosure-toggle[aria-expanded="true"]'
      )
      .forEach((button) => {
        const submenu = this.getSubmenu(button);
        const item = button.parentElement;
        if (
          submenu &&
          item &&
          nextTarget instanceof Node &&
          !item.contains(nextTarget)
        ) {
          this.setExpanded(button, false);
        }
      });
  }

  @Listen("keydown")
  onKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.matches("a, button") ||
      target.closest(".bcgov-primary-menu-close")
    ) {
      return;
    }

    if (event.key === "Escape") {
      let item = target.closest("li");
      while (item && this.el.contains(item)) {
        const toggle = Array.from(item.children).find(
          (child): child is HTMLButtonElement =>
            child.matches("button.disclosure-toggle")
        );
        if (toggle?.getAttribute("aria-expanded") === "true") {
          event.preventDefault();
          event.stopPropagation();
          this.setExpanded(toggle, false);
          toggle.focus();
          return;
        }
        item = item.parentElement?.closest("li") ?? null;
      }
      return;
    }

    const toggle = target.matches("button.disclosure-toggle")
      ? (target as HTMLButtonElement)
      : null;
    const submenu = toggle ? this.getSubmenu(toggle) : null;
    if (
      event.key === "ArrowDown" &&
      submenu &&
      toggle?.getAttribute("aria-expanded") === "true"
    ) {
      const firstItem = this.getListItems(submenu)[0];
      if (firstItem) {
        event.preventDefault();
        firstItem.focus();
      }
      return;
    }

    const list = target.closest("ul");
    if (!list) {
      return;
    }
    const items = this.getListItems(list);
    const index = items.indexOf(target);
    if (index < 0) {
      return;
    }

    let destination: number;
    switch (event.key) {
      case "ArrowDown":
        destination = index + 1;
        break;
      case "ArrowUp":
        destination = index - 1;
        break;
      case "Home":
        destination = 0;
        break;
      case "End":
        destination = items.length - 1;
        break;
      default:
        return;
    }

    if (destination >= 0 && destination < items.length) {
      event.preventDefault();
      items[destination].focus();
    }
  }

  private updateDesktop() {
    const isDesktop = window.innerWidth >= this.breakpoint;
    this.el.classList.toggle("is-desktop", isDesktop);
    if (this.primary) {
      document.body.classList.toggle(
        "bcgov-menu-primary-is-desktop",
        isDesktop
      );
    }
  }

  private initializeDisclosures() {
    this.el
      .querySelectorAll<HTMLUListElement>("li > ul")
      .forEach((submenu) => {
        const item = submenu.parentElement as HTMLLIElement;
        const link = Array.from(item.children).find(
          (child): child is HTMLAnchorElement => child.nodeName === "A"
        );
        let button = Array.from(item.children).find(
          (child): child is HTMLButtonElement =>
            child.matches("button.disclosure-toggle")
        );
        const generated = !button;
        if (!button) {
          button = document.createElement("button");
          button.className = "disclosure-toggle";
          button.type = "button";
          item.insertBefore(button, submenu);
        }

        const id =
          button.getAttribute("aria-controls") ||
          submenu.id ||
          `bcgov-menu-submenu-${++submenuSequence}`;
        submenu.id = id;
        button.type = "button";
        button.setAttribute("aria-controls", id);

        button.classList.toggle("has-label", !link);
        if (link && !button.hasAttribute("aria-label")) {
          button.setAttribute(
            "aria-label",
            `Toggle ${link.textContent?.trim() || "submenu"}`
          );
        } else if (
          !link &&
          !button.hasAttribute("aria-label") &&
          (generated || !button.textContent?.trim())
        ) {
          const label =
            Array.from(item.childNodes)
              .filter((child) => child !== submenu && child !== button)
              .map((child) => child.textContent?.trim())
              .filter(Boolean)
              .join(" ") || "submenu";
          button.setAttribute("aria-label", `Toggle ${label}`);
        }

        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(expanded));
        submenu.hidden = !expanded;
        item.classList.toggle("expanded", expanded);
      });
  }

  private getSubmenu(button: HTMLButtonElement): HTMLUListElement | null {
    const parent = button.parentElement;
    if (!parent || parent.nodeName !== "LI") {
      return null;
    }

    const submenu = Array.from(parent.children).find(
      (child) => child.nodeName === "UL"
    );
    return submenu ? (submenu as HTMLUListElement) : null;
  }

  private setExpanded(button: HTMLButtonElement, expanded: boolean) {
    const submenu = this.getSubmenu(button);
    if (!submenu) {
      throw new Error(
        "Each disclosure-toggle button must share a list item with a nested ul."
      );
    }

    const list = button.parentElement.parentElement;
    this.el
      .querySelectorAll<HTMLButtonElement>(
        'button.disclosure-toggle[aria-expanded="true"]'
      )
      .forEach((openButton) => {
        if (
          openButton !== button &&
          openButton.parentElement.parentElement === list
        ) {
          this.setExpanded(openButton, false);
        }
      });

    button.setAttribute("aria-expanded", String(expanded));
    submenu.hidden = !expanded;
    button.parentElement.classList.toggle("expanded", expanded);
  }

  private getListItems(list: Element): HTMLElement[] {
    return Array.from(list.children).flatMap((item) => {
      if (item.nodeName !== "LI") {
        return [];
      }
      return Array.from(item.children).filter(
        (child): child is HTMLElement =>
          child.nodeType === 1 &&
          (child.matches("a") || child.matches("button.disclosure-toggle"))
      );
    });
  }

  render() {
    return (
      <Host>
        <nav aria-label={this.label}>
          {this.primary && (
            <button
              class="bcgov-primary-menu-close"
              type="button"
              aria-label="Close mobile navigation"
            >
              <span aria-hidden="true">x</span>
            </button>
          )}
          <ul class={`align-${this.alignment}`}>
            <slot></slot>
          </ul>
        </nav>
      </Host>
    );
  }
}
