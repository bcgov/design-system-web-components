'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a80b6824.js');

let BcgovSearch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: "bcgov-search" }, index.h("div", { class: "search-container" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};

exports.bcgov_search = BcgovSearch;
