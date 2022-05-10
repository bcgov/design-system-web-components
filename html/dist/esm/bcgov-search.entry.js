import { r as registerInstance, h, H as Host, g as getElement } from './index-cfce1eb0.js';

const BcgovSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** A number that represents mobile search breakpoint in px; */
    this.breakpoint = 0;
  }
  componentWillLoad() {
    const self = this;
    self.isSearchMobile();
    window.addEventListener("resize", function () {
      self.isSearchMobile();
    });
  }
  isSearchMobile() {
    if (window.innerWidth >= this.breakpoint) {
      if (!this.el.classList.contains("is-search-desktop")) {
        this.el.classList.add("is-search-desktop");
      }
    }
    else {
      this.el.classList.remove("is-search-desktop");
    }
  }
  onKeyPress(event) {
    if (event.which === 10 || event.which === 13) {
      event.target.closest('form').submit();
    }
  }
  render() {
    return (h(Host, { class: "bcgov-search" }, h("div", { class: "search-container" }, h("slot", null))));
  }
  get el() { return getElement(this); }
};

export { BcgovSearch as bcgov_search };
