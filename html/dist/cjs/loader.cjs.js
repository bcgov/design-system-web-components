'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a7012d7.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["bcgov-beta.cjs",[[0,"bcgov-beta",{"content":[1],"label":[1]}]]],["bcgov-breadcrumb.cjs",[[4,"bcgov-breadcrumb"]]],["bcgov-button.cjs",[[4,"bcgov-button",{"link":[1],"active":[1],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"breakpoint":[32]},[[0,"click","onClick"]]]]],["bcgov-callout.cjs",[[4,"bcgov-callout"]]],["bcgov-carousel.cjs",[[1,"bcgov-carousel"]]],["bcgov-footer.cjs",[[4,"bcgov-footer",{"logo":[1]}]]],["bcgov-form.cjs",[[4,"bcgov-form"]]],["bcgov-header.cjs",[[4,"bcgov-header",{"href":[1],"logo":[1]}]]],["bcgov-menu.cjs",[[4,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"isSubmenu":[32],"clone":[32],"allTags":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search.cjs",[[4,"bcgov-search"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
