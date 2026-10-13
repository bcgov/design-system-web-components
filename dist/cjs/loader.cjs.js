'use strict';

var index = require('./index-C8cDmPpN.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["bcgov-beta_11.cjs",[[512,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}],[260,"bcgov-breadcrumb"],[772,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]],[260,"bcgov-callout"],[257,"bcgov-carousel"],[772,"bcgov-footer",{"logo":[1]}],[260,"bcgov-form"],[772,"bcgov-header",{"href":[1],"logo":[1]}],[772,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]],[772,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]],[257,"bcgov-tabs"]]],["bcgov-tab.cjs",[[257,"bcgov-tab"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
