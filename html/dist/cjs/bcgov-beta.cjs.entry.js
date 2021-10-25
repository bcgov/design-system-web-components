'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56948967.js');

let BcgovBeta = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.content = "This Application is currently in Beta Phase";
    this.label = "Beta";
    this.stateContent = "";
  }
  componentWillLoad() {
    this.stateContent = this.el.textContent || this.content;
    this.el.innerHTML = this.label;
  }
  render() {
    return (index.h(index.Host, { class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
  }
  get el() { return index.getElement(this); }
};

exports.bcgov_beta = BcgovBeta;
