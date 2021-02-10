'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb239ad2.js');

const BcgovCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "bcgov-carousel" }, index.h("slot", null)));
  }
};

exports.bcgov_carousel = BcgovCarousel;
