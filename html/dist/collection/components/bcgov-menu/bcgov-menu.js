import { Component, Host, h, Prop, Element, Listen, State, } from "@stencil/core";
import { menuElement, keys, findAncestor } from "../utils/utils";
export class BcgovMenu {
  constructor() {
    /** Alignment of menu */
    this.alignment = "left";
    /** Menu id used for instructions
     * TODO: this might need more consideration
     */
    this.menuId = "menu";
    /** Aria Instructions */
    this.instructions = `Use arrow keys to navigate between menuitems,
  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.`;
    /** A number that represents mobile menu breakpoint in px; */
    this.breakpoint = 0;
    /** Automatically adds hamburger. */
    this.hamburger = true;
    this.active = false;
    /** Adds hover to submenues */
    this.allowHover = false;
    /** Changes timeout for submenu */
    this.menuTimeOut = 500;
    this.isSubmenu = false;
    this.showSubmenu = (target, expanded) => {
      if (!this.isSubmenu) {
        return;
      }
      if (expanded) {
        target.classList.add("expanded");
      }
      else {
        target.classList.remove("expanded");
      }
      target.setAttribute("aria-expanded", expanded ? "true" : "false");
      target.setAttribute("tabindex", expanded ? "-1" : "0");
      const submenu = target.querySelector("ul");
      if (null !== submenu) {
        submenu.setAttribute("aria-hidden", expanded ? "false" : "true");
        if (expanded) {
          const firstFocus = target.querySelector("ul > li:first-child");
          firstFocus.setAttribute("tabindex", "0");
          //firstFocus.focus();
        }
        else {
          //this.el.focus();
        }
      }
    };
  }
  componentWillLoad() {
    this.isSubmenu = "UL" === this.el.parentElement.nodeName;
    [].forEach.call(this.el.querySelectorAll("a"), function (element) {
      menuElement(element);
    });
    const self = this;
    this.bodyTag = document.getElementsByTagName("BODY")[0];
    if (!this.isSubmenu) {
      this.isDesktop();
      window.addEventListener("resize", function () {
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
      this.el.setAttribute("tabindex", -1);
      const primaryMenu = this.el.closest("bcgov-menu[primary]");
      if (null !== primaryMenu) {
        this.allowHover =
          this.allowHover || primaryMenu.hasAttribute("allow-hover");
        this.menuTimeOut = primaryMenu.hasAttribute("menu-time-out")
          ? primaryMenu.getAttribute("menu-time-out")
          : this.menuTimeOut;
      }
    }
    else {
      const firstChild = this.el.querySelector("ul > *:first-child");
      if (null !== firstChild) {
        firstChild.setAttribute("tabindex", 0);
      }
    }
  }
  isDesktop() {
    let isdesktop = false;
    if (!this.isSubmenu) {
      if (window.innerWidth >= this.breakpoint) {
        if (!this.el.classList.contains("is-desktop")) {
          this.el.classList.add("is-desktop");
        }
        if (undefined !== this.primary) {
          if (!this.bodyTag.classList.contains("bcgov-menu-primary-is-desktop")) {
            this.bodyTag.classList.add("bcgov-menu-primary-is-desktop");
          }
        }
        isdesktop = true;
      }
      else {
        this.el.classList.remove("is-desktop");
        if (undefined !== this.primary) {
          this.bodyTag.classList.remove("bcgov-menu-primary-is-desktop");
        }
      }
    }
    else {
      let parent = findAncestor(this.el, "bcgov-menu");
      if (null !== parent && parent.getAttribute("breakpoint")) {
        const bp = parseInt(parent.getAttribute("breakpoint"));
        isdesktop = window.innerWidth >= bp;
      }
    }
    return isdesktop;
  }
  onMouseEnter(ev) {
    if (this.isDesktop() && this.allowHover) {
      const element = ev.target;
      //element.focus();
      this.showSubmenu(element, true);
    }
  }
  onMouseLeave(event) {
    if (this.isDesktop() && this.allowHover) {
      const element = event.target;
      const self = this;
      clearTimeout(this.menuTimeOutState);
      this.menuTimeOutState = setTimeout(function () {
        self.showSubmenu(element, false);
      }, self.menuTimeOut);
      if (!this.isSubmenu) {
        [].forEach.call(this.el.querySelectorAll("ul > *"), function (element) {
          element.setAttribute("tabindex", -1);
          element.blur();
        });
      }
    }
  }
  onClick(event) {
    const element = event.target;
    const parent = findAncestor(element, "bcgov-menu");
    if (null === element.closest(".bcgov-primary-menu-close")) {
      this.showSubmenu(parent, !parent.classList.contains("expanded"));
    }
    if ("close-menu-mobile" === element.parentElement.getAttribute("id")) {
      parent.classList.add("target-hidden");
    }
  }
  onKeyDown(event) {
    const current = event.srcElement;
    if (!this.isSubmenu || true) {
      switch (event.keyCode) {
        case keys.enter:
          current.querySelector("a").click();
        case keys.space:
          event.preventDefault();
          event.stopPropagation();
          this.showSubmenu(this.el, true);
          const firstFocus = this.el.querySelector("ul > li:first-child");
          firstFocus.focus();
          break;
        case keys.esc:
          event.preventDefault();
          event.stopPropagation();
          this.showSubmenu(this.el, false);
          this.el.focus();
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
  focusChange(current, direction = "next") {
    if (this.isSubmenu) {
      //return;
    }
    let element;
    if (current === this.el.querySelector("ul")) {
      element = current.querySelector("li:first-child");
      element = this.isDesktop() ? element.nextElementSibling : element;
      current = element;
    }
    else {
      if ("next" === direction || "down" === direction) {
        element = current.nextElementSibling;
      }
      else if ("prev" == direction || "up" === direction) {
        element = current.previousElementSibling;
      }
    }
    const insideSub = null !== findAncestor(current, 'ul[role="menu"]');
    const checkAllowed = (insideSub && ("up" === direction || "down" === direction)) ||
      (!insideSub && ("prev" === direction || "next" === direction));
    if (!checkAllowed) {
      return;
    }
    if (null != element &&
      ("LI" === current.nodeName || "BCGOV-MENU" === current.nodeName)) {
      current.setAttribute("tabindex", "-1");
      element.setAttribute("tabindex", "0");
      element.focus();
    }
  }
  render() {
    const alignment = "align-" + this.alignment;
    const instructionID = "bcgov-instructions-" + this.menuId;
    let hostClass = "expandable";
    if (this.isSubmenu) {
      if (undefined !== this.active && this.active) {
        hostClass += " active";
      }
      return (h(Host, { role: "menuitem", class: hostClass, "aria-label": this.name },
        h("div", null,
          h("a", { href: this.href, tabindex: "-1" }, this.name),
          h("span", null),
          h("slot", { name: "submenu-link" })),
        h("ul", { role: "menu", "aria-hidden": "true" },
          h("slot", null))));
    }
    else {
      const props = { role: "menubar", tabindex: "0", class: alignment };
      if (undefined !== this.primary) {
        props["aria-labelledby"] = instructionID;
      }
      if (undefined !== this.sidebar) {
        props["class"] += " sidebar-menu";
      }
      return (h(Host, null,
        h("ul", Object.assign({}, props),
          undefined !== this.primary && (h("li", { role: "menuitem", class: "bcgov-primary-menu-close", tabindex: "-1", "aria-hidden": "true", "aria-labelId": "close-menu-mobile" },
            h("a", { href: "#", "aria-label": "Close Mobile Menu", id: "close-menu-mobile" },
              h("span", null, "x")))),
          h("slot", null)),
        undefined !== this.primary && (h("div", { class: "sr-only", "aria-hidden": "true", id: instructionID }, this.instructions))));
    }
  }
  static get is() { return "bcgov-menu"; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Alignment of menu"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "\"left\""
    },
    "primary": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "primary",
      "reflect": false
    },
    "sidebar": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sidebar",
      "reflect": false
    },
    "menuId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Menu id used for instructions\nTODO: this might need more consideration"
      },
      "attribute": "menu-id",
      "reflect": false,
      "defaultValue": "\"menu\""
    },
    "instructions": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Aria Instructions"
      },
      "attribute": "instructions",
      "reflect": false,
      "defaultValue": "`Use arrow keys to navigate between menuitems,\n  spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.`"
    },
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Link for menu"
      },
      "attribute": "href",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Label for submenu"
      },
      "attribute": "name",
      "reflect": false
    },
    "breakpoint": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A number that represents mobile menu breakpoint in px;"
      },
      "attribute": "breakpoint",
      "reflect": false,
      "defaultValue": "0"
    },
    "hamburger": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Automatically adds hamburger."
      },
      "attribute": "hamburger",
      "reflect": false,
      "defaultValue": "true"
    },
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    },
    "allowHover": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Adds hover to submenues"
      },
      "attribute": "allow-hover",
      "reflect": false,
      "defaultValue": "false"
    },
    "menuTimeOut": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Changes timeout for submenu"
      },
      "attribute": "menu-time-out",
      "reflect": false,
      "defaultValue": "500"
    }
  }; }
  static get states() { return {
    "isSubmenu": {},
    "clone": {},
    "allTags": {},
    "bodyTag": {},
    "menuTimeOutState": {}
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "mouseenter",
      "method": "onMouseEnter",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "onMouseLeave",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "onKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
