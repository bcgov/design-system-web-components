'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb239ad2.js');

const BcgovCallout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "bcgov-callout" }, index.h("slot", null)));
  }
};

exports.bcgov_callout = BcgovCallout;
