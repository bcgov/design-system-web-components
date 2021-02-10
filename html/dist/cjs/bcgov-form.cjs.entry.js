'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb239ad2.js');

const BcgovForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { className: "bcgov-form" }, index.h("slot", null)));
  }
};

exports.bcgov_form = BcgovForm;
